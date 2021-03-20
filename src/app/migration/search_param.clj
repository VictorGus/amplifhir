(ns app.migration.search-param
  (:require [cheshire.core   :as json]
            [app.rest.utils  :as u]
            [clojure.java.io :as io]
            [clojure.string  :as str]))

(defn parse-expression [exp]
  (map
   #(str/split % #"\.")
   (str/split (str/trim exp) #"\ | ")))

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

(comment

  (expression->array "Patient" "Patient.address | Person.address | Practitioner.address | RelatedPerson.address")

  (save-to-resources "https://www.hl7.org/fhir/search-parameters.json" (io/resource "fhir2.edn") (u/edn-resource->map "fhir.edn"))

  )
