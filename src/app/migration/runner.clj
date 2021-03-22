(ns app.migration.runner
  (:require [app.db.core :as db]))

(defn run-single [{conn :db/connection :as ctx} migration-key migration-fn]
  (let [r (db/search-by-id conn :Migration migration-key)]
    (when (nil? r)
      (db/create conn :Migration {:_id migration-key :status "pending"})
      (db/update-by-id conn :Migration migration-key {:currentDate {:creationDateTime true}})
      (try
        (migration-fn ctx)
        (db/update-by-id conn :Migration migration-key {:currentDate {:completedDateTime true}})
        (db/update-by-id conn :Migration migration-key {:set {:status "completed"}})
        (catch Exception e
          (db/update-by-id conn :Migration migration-key {:status "error"})
          (throw e))))))

(defn run-migrations [{mgs :migrations :as ctx}]
  (doseq [[mg-k mg-fn] mgs]
    (run-single ctx mg-k mg-fn)))
