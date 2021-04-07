(ns app.manifest
  (:require [app.rest.utils :as u]
            [clojure.java.io :as io]))

(def app-config
  {:db {:host     (or (System/getenv "MONGO_HOST")     "localhost")
        :port     (or (Integer/parseInt (System/getenv "MONGO_PORT"))     27017)
        :user     (or (System/getenv "MONGO_USER")     "root")
        :password (or (System/getenv "MONGO_PASSWORD") "root")
        :dbname   (or (System/getenv "MONGO_DATABASE") "amplifhir-db")}
   :app {:port (or (System/getenv "APP_PORT") 9090)
         :modules {:fhir {:entities_list (:entities  (u/edn-resource->map "fhir2.edn"))
                          :resources (:resource_list (u/edn-resource->map "fhir2.edn"))}}
         :validation {:json_schema (slurp (io/resource "fhir_schema.json"))}}})
