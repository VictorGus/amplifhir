(ns app.fhir.validation
  (:require [app.db.core      :as db]
            [cheshire.core    :as json]
            [json-schema.core :as json-schema]
            [clojure.java.io :as io]))

;;TODO
(defn build-schema [structure]
  )

;; (defn validate-uniqueness [ctx resource]
;;   )

(defn validate-references [])

(defn compile-schema-to-ctx [ctx]
  (let [schema (get-in ctx [:validation :json_schema])
        compiled-schema (json-schema/compile schema)]
    (assoc-in ctx [:validation :validate] compiled-schema)))

;;TODO - return shaped error in a case of validation errors
(defn validate-resource [{rt :entity :as ctx} resource]
  (let [validate (-> ctx :validation :validate)]
    (validate resource)))

(comment


  (def schema {:$schema "http://json-schema.org/draft-07/schema#"
               :type "object"
               :properties {:id {:type "integer"}
                            :huest {:type "string"}}
               :additionalProperties false
               :required [:id]})

  (json-schema/validate schema {:id 2
                                :test 2})

  ((json-schema/compile (json/parse-string (slurp (io/resource "fhir_schema.json")) true)) {:resourceType "Patient" :gender 2})


  )

