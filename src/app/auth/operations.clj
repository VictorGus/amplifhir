(ns app.auth.operations
  (:require [app.db.core      :as db]
            [app.db.query     :as q]
            [app.auth.encrypt :as e]
            [app.auth.subject :as s]))

(defn register [{conn :db/connection :as ctx}]
  (fn [{:keys [body] :as req}]
    (let [initial-res  (select-keys body [:permissions :password])
          salt         (e/get-salt)
          prepared-res (-> {}
                           (assoc-in :resource initial-res)
                           (assoc :_id (:name body))
                           (assoc-in  [:resource :salt] salt)
                           (update-in [:resource :password] #(s/enrich-password salt %)))]
      (try
        (db/create conn :User prepared-res)
        {:status 201
         :body prepared-res}
        (catch com.mongodb.DuplicateKeyException e
          {:status 409
           :body {:message "User already exists"}})))))

(defn login [{conn :db/connection :as ctx}]
  (fn [{:keys [body] :as req}]
    (let [{:keys [login password]} body]
      (if-let [user (db/search-by-id conn :User login)]
        (if (s/verify-secret password (:resource user))
          (let [access-token (s/generate-access-token)]
            (s/create-session ctx user)
            {:status 200
             :body {:access_token access-token}})
          {:status 401
           :body {:message "Wrong password"}})
        {:status 401
         :body {:message (str "User " login " doesn't exists")}}))))

(defn logout [{conn :db/connection :as ctx}]
  (fn [{:keys [body] :as req}]
    (let [{:keys [name]}  body
          {:keys [_id] :as current-session} (first
                                             (db/search conn
                                                        :UserSession
                                                        (q/into-inner-query {:resource {:user name}})))]
      (s/deactivate-session conn _id)
      {:status 200})))
