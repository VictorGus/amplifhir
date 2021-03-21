(ns app.migration.search-param
  (:require [cheshire.core   :as json]
            [app.rest.utils  :as u]
            [app.db.core     :as db]
            [clojure.java.io :as io]
            [clojure.string  :as str]))

;;make parser smarter
(defn parse-expression [exp]
  (map
   #(filter
     (fn [i]
       (not (str/includes? i "where")))
     (str/split (str/trim %) #"\."))
   (str/split exp #"\|")))

(defn trim-resource-type [exp-as-array]
  (rest (map keyword exp-as-array)))

(defn trim-non-related-resources [rt exp-as-array]
  (apply concat (filter (partial some #{rt}) exp-as-array)))

(defn expression->array [rt exp]
  (->> exp
       parse-expression
       (trim-non-related-resources rt)
       trim-resource-type))

(defn save-to-resources [sp-bundle-path f edn-f]
  (let [sp-bundle (-> sp-bundle-path slurp (json/parse-string true))]
    (spit f (reduce
             (fn [acc k]
               (let [k* (name k)]
                 (reduce
                  (fn [acc sp]
                    (let [sp* (-> sp
                                  (select-keys [:expression :type])
                                  (update :expression #(expression->array k* %)))]
                      (assoc-in acc [:resource_list k :search_parameters (keyword (:code sp))] sp*)))
                  acc
                  (map :resource
                       (filter
                        (comp (partial some #{k*}) :base :resource)
                        (:entry sp-bundle))))))
             edn-f
             (:entities edn-f)))))

(defn text-index-migration [{conn :db/connection :as ctx}]
  #_(db/ensure-index conn ))

(comment

  (expression->array "CarePlan" "CarePlan.subject.where(resolve() is Patient)")

  (save-to-resources "https://www.hl7.org/fhir/search-parameters.json" (io/resource "fhir2.edn") (u/edn-resource->map "fhir.edn"))

  (parse-expression "CarePlan.subject.where(resolve() is Patient)")

)
