(ns app.auth.subject
  (:require [app.db.core      :as db]
            [app.db.query     :as q]
            [app.auth.utils   :as u]
            [app.auth.encrypt :as e]))

(defn unknown-subject-type? [t]
  (when-not (#{:Client :User "Client" "User"} t)
    (throw (new IllegalArgumentException (str "Unknown subject type " t)))))

(defn enrich-password [salt password]
  (let [base64-encoded-salt (e/base64-encode salt)]
    (e/sha256 (str password base64-encoded-salt))))

(defn verify-secret [secret {:keys [password salt] :as subj}]
  (let [enriched-secret (enrich-password salt secret)]
    (= password enriched-secret)))

(defn generate-access-token []
  (e/base64-encode (u/generate-uuid)))

(defn find-active-session [{conn :db/connection :as ctx} access-token]
  (first
   (db/search conn :UserSession {:resource (merge
                                            (q/into-inner-query {:access_token access-token})
                                            (q/into-inner-query {:status "active"}))})))

(defn find-user [{conn :db/connection :as ctx} {{:keys [user]} :resource :as session}]
  (db/search-by-id conn :User user))

(defn create-session [{conn :db/connection :as ctx} {:keys [_id resource] :as user}]
  (db/create conn :UserSession {:_id (u/generate-uuid)
                                :resource {:access_token (generate-access-token)
                                           :status "active"
                                           :user _id}}))

(defn deactivate-session [{conn :db/connection :as ctx} session-id]
  (db/update-by-id conn session-id {:set (q/into-inner-query {:resource {:status "stale"}})}))

(defn verify-permissions [permissions {:keys [entity operation modules] :as ctx}]
  (filter
   (fn [p]
     (letfn [(verify-entity [e es]
               (if (coll? es)
                 ((set (map name es)) e)
                 (let [{e-list :entities_list :as tm} (get modules es)]
                   ((set (map name e-list)) e)))
               )]
       (and ((set (map name (:operations p))) (name operation))
            (verify-entity (name entity) (:entities p)))))
   permissions))

(defn shape-super [{:keys [_id password]}]
  (let [salt (e/get-salt)]
    {:_id _id
     :permissions :superuser
     :password (enrich-password salt password)
     :salt salt}))

