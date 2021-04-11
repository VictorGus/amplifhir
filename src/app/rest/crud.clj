(ns app.rest.crud
  (:require [app.db.core      :as db]
            [app.rest.utils   :as u]
            [app.rest.search  :as search]
            [app.rest.error   :as error]
            [app.rest.history :as history]
            [app.hook.core    :as hook]))

(defn read-by-id [{conn :db/connection rt :entity :as ctx}]
  (fn [{:keys [params] :as request}]
    (if-let [q-res (db/search-by-id conn rt (:id params))]
      {:body q-res
       :status 200}
      (error/create-error [{:error-type :not-found
                            :diagnostics (str "Resource with id " (:id params) " not found")}]))))

;;TODO add validation
(defn create-resource [{conn :db/connection rt :entity :as ctx}]
  (fn [{:keys [body] :as request}]
    (let [id (u/generate-uuid)]
      (if-let [err (hook/call-hooks request (assoc ctx :operation :create))]
        err
        (if-let [q-res (db/create conn rt (assoc {:_id id
                                                  :resourceType rt} :resource body))]
          (do
            (history/log-to-history ctx :create (merge body {:_id id}))
            {:body q-res
             :status 201}))))))

;;TODO return OperationOutcome when no resource is found
(defn delete-resource [{conn :db/connection rt :entity :as ctx}]
  (fn [{:keys [params] :as request}]
    (let [body (db/search-by-id conn rt (:id params))]
      (if-let [q-res (db/delete-by-id conn rt (:id params))]
        (do
          (history/log-to-history ctx :delete (dissoc body :resourceType))
          {:status 204})))))

;;TODO add validation
(defn update-resource [{conn :db/connection rt :entity :as ctx}]
  (fn [{:keys [body params] :as request}]
    (hook/call-hooks request (assoc ctx :operation :update))
    (let [q-res    (db/update-by-id conn rt (:id params) (merge {:resource body} {:resourceType (name rt)}) {:upsert true})
          resource (db/search-by-id conn rt (:id params))]
      (cond
        (db/updated-existing? q-res)
        (do
          (history/log-to-history ctx :update (dissoc resource :resourceType))
          {:body resource
           :status 200})

        (db/acknowledged? q-res)
        (do
          (history/log-to-history ctx :create (dissoc resource :resourceType))
          {:body resource
           :status 201})

        :else
        {:body {:message "TODO validation"}
         :status 422}))))

;;TODO add validation
(defn patch-resource [{conn :db/connection rt :entity :as ctx}]
  (fn [{:keys [body params] :as request}]
    (hook/call-hooks request (assoc ctx :operation :update))
    (let [q-res    (db/update-by-id conn rt (:id params) {:set {:resource body}})
          resource (db/search-by-id conn rt (:id params))]
      (if (db/acknowledged? q-res)
        {:body resource
         :status 200}
        {:body (error/create-error [{:error-type :not-found}])
         :status 404}))))

(def search-resource search/search)
