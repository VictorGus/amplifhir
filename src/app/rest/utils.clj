(ns app.rest.utils
  (:require [clojure.java.io :as io]
            [cheshire.core   :as json]))

(defn generate-uuid []
  (.toString (java.util.UUID/randomUUID)))

(defn edn-resource->map [f]
  (-> (io/resource f) slurp read-string))

(comment


{:birthdate {:type "date", :expression ["birthDate"]},
 :address {:type "string", :expression ["address"]},
 :given {:type "string", :expression ["name" "given"]},
 :email {:type "token", :expression ["telecom" {:system "email"}]},
 :death-date {:type "date", :expression ["deceased" "dateTime"]},
 :family {:type "string", :expression ["name" "family"]},
 :phonetic {:type "string", :expression ["name"]},
 :address-state {:type "string", :expression ["adddress" "state"]},
 :phone {:type "token", :expression ["telecom" {:system "phone"}]},
 :address-postalcode {:type "string",
                      :expression ["address" "postalCode"]},
 :name {:type "string", :expression ["name"]},
 :organization {:type "reference",
                :expression ["managingOrganization"]},
 :deceased {:type "token", :expression ["deceased"]},
 :address-use {:type "token", :expression ["address" "use"]},
 :address-city {:type "string", :expression ["address" "city"]},
 :general-practitioner {:type "reference",
                        :expression ["generalPractitioner"]},
 :language {:type "token", :expression ["communication" "language"]},
 :link {:type "reference", :expression ["link" "other"]},
 :active {:type "token", :expression ["active"]},
 :identifier {:type "token", :expression ["identifier"]},
 :telecom {:type "token", :expression ["telecom"]},
 :address-country {:type "string", :expression ["address" "country"]}}

(spit (io/resource "fhir2.edn") (reduce-kv
       (fn [acc k v]
         (reduce
          (fn [acc sp]
            (assoc-in acc [:resource_list k :search_parameters (keyword (:code sp))] (select-keys sp [:expression :type])))
          acc
          (map :resource
               (filter
                (comp (partial some #{(name k)}) :base :resource)
                (:entry (json/parse-string (slurp "https://www.hl7.org/fhir/search-parameters.json") true))))))

       (edn-resource->map "fhir.edn")
       (select-keys (:resource_list (edn-resource->map "fhir.edn")) [:Patient])))

)

