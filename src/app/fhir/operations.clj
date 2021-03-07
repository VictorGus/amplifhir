(ns app.fhir.operations
  (:require [app.rest.operation :as op]
            [app.rest.error     :as error]
            [app.rest.utils     :as u]
            [app.context        :as context]
            [app.dbcore         :as db]
            [cheshire.core      :as json]
            [clojure.java.io    :as io]
            [clojure.string     :as str]))

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
    (op/create-operation op-name (read-by-id ctx*) acc)))

(defmethod inject-operation :create [_ rt ctx acc]
  (let [op-name (to-op-name :create rt)
        ctx*    (assoc ctx :entity rt)]
    (op/create-operation op-name (create-resource ctx*) acc)))

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
