(ns app.fhir.operations
  (:require [app.rest.operation :as op]
            [app.rest.error     :as error]
            [app.rest.crud      :as crud]
            [app.context        :as context]
            [cheshire.core      :as json]
            [clojure.java.io    :as io]
            [clojure.string     :as str]))

(defn edn-resource->map [f]
  (-> (io/resource f) slurp read-string))

(defn to-op-name [op rt]
  (let [[first-part second-part] (str/split (name op) #"-" 2)]
    (keyword (str first-part "-" (.toLowerCase (name rt)) (when second-part
                                                            (str "-" second-part))))))

(defmulti inject-operation (fn [op _ _ _] op))

(defmethod inject-operation :read [_ rt ctx acc]
  (let [op-name (to-op-name :read-by-id rt)
        ctx*    (assoc ctx :entity rt)]
    (op/create-operation op-name (crud/read-by-id ctx*) acc)))

(defmethod inject-operation :create [_ rt ctx acc]
  (let [op-name (to-op-name :create rt)
        ctx*    (assoc ctx :entity rt)]
    (op/create-operation op-name (crud/create-resource ctx*) acc)))

(defn shape-up-handlers [ctx rs]
  (reduce (fn [acc r]
            (->> acc
                 (inject-operation :read   r ctx)
                 (inject-operation :create r ctx)))
          {}
          rs))

;; TODO: add rest operations
(defn create-basic-routes [rt]
  (let [read-op   (to-op-name :read-by-id rt)
        create-op (to-op-name :create rt)]
    {read-op   {:method :GET
                :path [(name rt) [:id]]}
     create-op {:method :POST
                :path [(name rt)]}}))

(defn shape-up-routes [ctx]
  (let [rs (:entities (edn-resource->map "fhir.edn"))]
    {:routes (apply merge (mapv #(create-basic-routes %) rs))
     :operations (shape-up-handlers ctx rs)}))

(comment

  (op/normalize-routes (shape-up-routes {}))

  )
