(ns app.fhir.validation
  (:require [scjsv.core     :as v]
            [app.db.core    :as db]
            [app.rest.utils :as u]
            ))

;;TODO
(defn build-schema [structure]
  )

(defn save-schema [{conn :db/connection :as ctx} rt schema]
  (let [id (u/generate-uuid)]
    (db/create conn :ValidationSchema {:_id id :describedResource rt :resource schema})))

(defn schemas-migration [{conn :db/connection {{resources :resources} :fhir} :modules :as ctx}]
  (doseq [[rt rb] resources]
    (let [structure (:resource_structure rb)
          schema (build-schema structure)]
      (save-schema ctx rt schema))))

(defn get-schema [{conn :db/connection :as ctx} rt]
  (first (db/search conn :ValidationSchema {:describedResource rt})))

;; (defn validate-uniqueness [ctx resource]
;;   )

(defn validate-references [])

(defn validate-resource [{rt :entity :as ctx} resource]
  (let [schema (get-schema ctx rt)
        validate (v/validator schema)]
    (validate resource)))

(comment

  (def schema {:$schema "http://json-schema.org/draft-07/schema#"
               :type "object"
               :properties {:id   {:type "integer"}
                            :test {:type "string"}}
               :required [:id]})

  (def validate (v/validator schema))

  (validate {:test 2})




  )

