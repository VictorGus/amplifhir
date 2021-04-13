(ns app.auth.subject
  (:require [app.db.core      :as db]
            [app.auth.encrypt :as e]))

(defn unknown-subject-type? [t]
  (when-not (#{:Client :User "Client" "User"} t)
    (throw (new IllegalArgumentException (str "Unknown subject type " t)))))

(defn verify-secret [secret {:keys [password salt] :as subj}]
  (let [base64-encoded-salt (e/base64-encode salt)]
    (= password (e/sha256 (str secret base64-encoded-salt)))))
