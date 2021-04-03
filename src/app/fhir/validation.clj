(ns app.fhir.validation
  (:require [scjsv.core :as v]))

(defn validate-uniqueness [ctx resource]
  )

(defn validate-references [])

(defn validate-resource [])

;;TODO

(comment

  (def schema {:$schema "http://json-schema.org/draft-04/schema#"
               :type "object"
               :properties {:id   {:type "integer"}
                            :test {:type "string"}}
               :required [:id]})

  (def validate (v/validator schema))

  (validate {:id 2})




  )

