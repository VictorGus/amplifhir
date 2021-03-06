(ns app.fhir.operations
  (:require [app.rest.operation :as op]
            [app.rest.module    :as module]
            [app.context        :as context]
            [app.dbcore         :as db]
            [cheshire.core      :as json]
            [clojure.java.io    :as io]
            [clojure.string     :as str]))

(defn edn-resource->map [f]
  (-> (io/resource f) slurp read-string))

;;add OperationOutcome
(defn read-by-id [{conn :db/connection rt :entity :as ctx}]
  (fn [{:keys [params] :as request}]
    (println ctx)
    (if-let [q-res (db/search-by-id conn rt (:id params))]
      {:body q-res
       :status 200}
      {:status 404
       :body {:message "not-found"}})))

(defn to-op-name [op rt]
  (let [[first-part second-part] (str/split (name op) #"-" 2)]
    (keyword (str first-part "-" (.toLowerCase (name rt)) (when second-part
                                                            (str "-" second-part))))))

(defmulti inject-operation (fn [op _ _] op))

(defmethod inject-operation :read [_ rt ctx]
  (let [op-name (to-op-name :read-by-id rt)
        ctx*    (assoc ctx :entity rt)]
    (op/create-operation op-name (read-by-id ctx*))))

(defn shape-up-handlers [ctx rs]
  (doseq [r rs]
    (inject-operation :read r ctx)))

;; TODO: add rest operations
(defn create-basic-routes [rt]
  (let [read-op (to-op-name :read-by-id rt)]
    {read-op {:method :GET
              :path [(name rt) [:id]]}}))

(defn shape-up-routes [ctx]
  (let [rs (:entities (edn-resource->map "fhir.edn"))]
    (shape-up-handlers ctx rs)
    {:api (apply merge (mapv #(create-basic-routes %) rs))}))

(module/create-module :fhir shape-up-routes)

(comment

  (apply merge (shape-up-routes (edn-resource->map "fhir.edn")))


  )
