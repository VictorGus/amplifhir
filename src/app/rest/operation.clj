(ns app.rest.operation
  (:require [cheshire.core :as json]
            [app.manifest :refer [app-config]]))

{:resource-read {:path ["test"]
                 :method :GET}}

(def registered-operations (atom {}))

(defn get-operation [handler-key]
  (get @registered-operations handler-key))

(defn normalize-routes [routes]
  (reduce-kv (fn [acc k v]
               (let [h (get-operation k)]
                 (assoc-in acc (conj (:path v) (:method v)) h)))
             {} routes))

(defn create-operation [handler-key req-handler]
  (swap! registered-operations assoc handler-key req-handler))

(comment

  (normalize-routes {:resource-read {:path ["test"]
                                     :method :GET}})

  (create-operation :resource-read (fn [req] (println req)))



  )
