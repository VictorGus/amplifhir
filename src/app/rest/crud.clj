(ns app.rest.crud
  (:require [app.dbcore     :as db]
            [app.rest.utils :as u]
            [app.rest.error :as error]))

(defn read-by-id [{conn :db/connection rt :entity :as ctx}]
  (fn [{:keys [params] :as request}]
    (if-let [q-res (db/search-by-id conn rt (:id params))]
      {:body q-res
       :status 200}
      (error/create-error {:error-type :not-found}))))

;;TODO add validation
(defn create-resource [{conn :db/connection rt :entity :as ctx}]
  (fn [{:keys [body] :as request}]
    (let [id (u/generate-uuid)]
      (if-let [q-res (db/create conn rt {:_id id
                                         :resource body
                                         :resourceType rt})]
        {:body q-res
         :status 201}))))
