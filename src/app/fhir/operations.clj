(ns app.fhir.operations
  (:require [app.rest.operation :as op]
            [app.rest.error     :as error]
            [app.rest.crud      :as crud]
            [app.rest.history   :as h]
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

(defmethod inject-operation :delete [_ rt ctx acc]
  (let [op-name (to-op-name :delete rt)
        ctx*    (assoc ctx :entity rt)]
    (op/create-operation op-name (crud/delete-resource ctx*) acc)))

(defmethod inject-operation :update [_ rt ctx acc]
  (let [op-name (to-op-name :update rt)
        ctx*    (assoc ctx :entity rt)]
    (op/create-operation op-name (crud/update-resource ctx*) acc)))

(defmethod inject-operation :patch [_ rt ctx acc]
  (let [op-name (to-op-name :patch rt)
        ctx*    (assoc ctx :entity rt)]
    (op/create-operation op-name (crud/patch-resource ctx*) acc)))

(defmethod inject-operation :search [_ rt ctx acc]
  (let [op-name (to-op-name :search rt)
        ctx*    (assoc ctx :entity rt)]
    (op/create-operation op-name (crud/search-resource ctx*) acc)))

(defmethod inject-operation :_history [_ rt ctx acc]
  (let [op-name (to-op-name :_history rt)
        ctx*    (assoc ctx :entity rt)]
    (op/create-operation op-name (h/get-history ctx*) acc)))

(defn shape-up-handlers [ctx rs]
  (reduce (fn [acc r]
            (->> acc
                 (inject-operation :read     r ctx)
                 (inject-operation :create   r ctx)
                 (inject-operation :delete   r ctx)
                 (inject-operation :update   r ctx)
                 (inject-operation :patch    r ctx)
                 (inject-operation :search   r ctx)
                 (inject-operation :_history r ctx)
                 ))
          {}
          rs))

;; TODO: add rest operations
(defn create-basic-routes [rt]
  (let [read-op    (to-op-name :read-by-id rt)
        create-op  (to-op-name :create rt)
        delete-op  (to-op-name :delete rt)
        update-op  (to-op-name :update rt)
        patch-op   (to-op-name :patch  rt)
        search-op  (to-op-name :search rt)
        history-op (to-op-name :_history rt)]
    {read-op    {:method :GET
                 :path [(name rt) [:id]]}
     create-op  {:method :POST
                 :path [(name rt)]}
     delete-op  {:method :DELETE
                 :path [(name rt) [:id]]}
     update-op  {:method :PUT
                 :path [(name rt) [:id]]}
     patch-op   {:method :PATCH
                 :path [(name rt) [:id]]}
     search-op  {:method :GET
                 :path [(name rt)]}
     history-op {:method :GET
                 :path [(name rt) [:id] "_history"]}
     }))

(defn shape-up-routes [{{{e_l :entities_list} :fhir} :modules :as ctx}]
  {:routes (apply merge (mapv #(create-basic-routes %) e_l))
   :operations (shape-up-handlers ctx e_l)})

(comment

  (op/normalize-routes (shape-up-routes {}))

  )
