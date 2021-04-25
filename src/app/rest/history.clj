(ns app.rest.history
  (:require [app.db.core    :as db]
            [app.rest.utils :as u]))

(defn ->history-collection [rt]
  (str (name rt) "_history"))

(defn log-to-history [{conn :db/connection rt :entity :as ctx} op {:keys [_id] :as rb}]
  (let [history-collection (->history-collection rt)
        now (new java.util.Date)
        id  (u/generate-uuid)
        rb* (dissoc rb :_id)]
    (db/create conn history-collection {:_id id :id _id :resource rb* :action (name op) :modified_ts now})))

(defn history-hook [ctx req]
  )

(defn get-history [{conn :db/connection rt :entity :as ctx}]
  (fn [{:keys [params] :as request}]
    (let [id       (:id params)
          args-vec [conn (->history-collection rt) {:id id}]
          total    (apply db/count-documents args-vec)
          q-res    (apply db/search          args-vec)]
      {:status 200
       :body {:resourceType "Bundle"
              :total total
              :entry q-res}})))
