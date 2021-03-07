(ns app.rest.operation)

;; (defonce registered-operations (atom {}))

;; (defn get-operation [handler-key]
;;   (get @registered-operations handler-key))

(defn normalize-routes [api]
  (let [handlers (:operations api)]
    (reduce-kv (fn [acc k v]
                 (let [h (k handlers)]
                   (assoc-in acc (conj (:path v) (:method v)) h)))
               {} (:routes api))))

(defn create-operation [handler-key req-handler acc]
  (assoc acc handler-key req-handler))

(defn build-routes [{:keys [api] :as ctx}]
  (let [normalized-routes (normalize-routes api)]
    normalized-routes))

(comment

  (normalize-routes {:resource-read {:path ["test"]
                                     :method :GET}})

  (create-operation :resource-read (fn [req] (println req)))



  )
