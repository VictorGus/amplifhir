(ns app.manifest)

(def app-config
  {:db {:host     (or (System/getenv "MONGO_HOST")     "localhost")
        :port     (or (Integer/parseInt (System/getenv "MONGO_PORT"))     27017)
        :user     (or (System/getenv "MONGO_USER")     "root")
        :password (or (System/getenv "MONGO_PASSWORD") "root")
        :dbname   (or (System/getenv "MONGO_DATABASE") "amplifhir-db")}
   :app {:port (or (System/getenv "APP_PORT") 9090)}})
