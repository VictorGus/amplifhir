(ns app.rest.crud
  (:require [app.dbcore      :as db]
            [app.rest.utils  :as u]
            [app.rest.search :as search]
            [app.rest.error  :as error]))

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
      (if-let [q-res (db/create conn rt (merge body {:_id id
                                                     :resourceType rt}))]
        {:body q-res
         :status 201}))))

;;TODO return OperationOutcome when no resource is found
(defn delete-resource [{conn :db/connection rt :entity :as ctx}]
  (fn [{:keys [params] :as request}]
    (if-let [q-res (db/delete-by-id conn rt (:id params))]
      {:status 204})))

;;TODO add validation
(defn update-resource [{conn :db/connection rt :entity :as ctx}]
  (fn [{:keys [body params] :as request}]
    (let [q-res    (db/update-by-id conn rt (:id params) (assoc body :resourceType (name rt)) {:upsert true})
          resource (db/search-by-id conn rt (:id params))]
      (cond
        (db/updated-existing? q-res)
        {:body resource
         :status 200}

        (db/acknowledged? q-res)
        {:body resource
         :status 201}

        :else
        {:body {:message "TODO validation"}
         :status 422}))))

;;TODO add validation
(defn patch-resource [{conn :db/connection rt :entity :as ctx}]
  (fn [{:keys [body params] :as request}]
    (let [q-res    (db/update-by-id conn rt (:id params) {:set body})
          resource (db/search-by-id conn rt (:id params))]
      (if (db/acknowledged? q-res)
        {:body resource
         :status 200}
        {:body (error/create-error [{:error-type :not-found}])
         :status 404}))))

(def search-resource search/search)
