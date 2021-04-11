(ns app.fhir.validation
  (:require [app.db.core      :as db]
            [app.rest.error   :as error]
            [cheshire.core    :as json]
            [json-schema.core :as json-schema]
            [clojure.java.io  :as io]
            [clojure.string :as str]))

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
(defn validate-resource [ctx resource]
  (let [validate (-> ctx :validation :validate)]
    (validate resource)))

(defn validation-hook [{:keys [entity] :as ctx} req]
  (let [entity*  (name entity)
        resource (assoc (clojure.walk/keywordize-keys (:body req)) :resourceType entity*)
        result   (validate-resource ctx resource)]
    (println resource)
    (when-let [errors (-> result :errors not-empty)]
      (let [errs* (map
                   #(hash-map :diagnostics (:message %)
                              :error-type  :invalid-resource
                              :expression  (str entity* "." (some->> (:path %) (map name) (str/join "."))))
                   errors)]
        (error/create-error errs*)))))

(comment


  (def schema {:$schema "http://json-schema.org/draft-07/schema#"
               :type "object"
               :properties {:id {:type "integer"}
                            :huest {:type "string"}}
               :additionalProperties false
               :required [:id]})

  (json-schema/validate schema {:id 2
                                :test 2})

  ((json-schema/compile (json/parse-string (slurp (io/resource "fhir_schema.json")) true)) {:resourceType "Patient" :gender 1 :test 2})

  )

