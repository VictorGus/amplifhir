(ns app.auth.subject
  (:require [app.db.core      :as db]
            [app.auth.encrypt :as e]))

(defn unknown-subject-type? [t]
  (when-not (#{:Client :User "Client" "User"} t)
    (throw (new IllegalArgumentException (str "Unknown subject type " t)))))

(defn verify-secret [secret {:keys [password salt] :as subj}]
  (let [base64-encoded-salt (e/base64-encode salt)]
    (= password (e/sha256 (str secret base64-encoded-salt)))))

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

(verify-permissions [{:operations [:create :read :update :delete]
                      :entities   :fhir  #_:fhir}] {:entity :Patient
                                                    :modules {:fhir {:entities_list [:Patient :Observation :Chlenation :Huesutin]}}
                                           :operation :update})
