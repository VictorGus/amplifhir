(ns app.auth.subject
  (:require [app.db.core      :as db]
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

(defn shape-super [password]
  (let [salt (e/get-salt)]
    {:_id "admin"
     :permissions :superuser
     :password (enrich-password salt password)
     :salt salt}))

