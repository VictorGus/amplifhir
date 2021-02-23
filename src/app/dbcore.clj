(ns app.dbcore
  (:require [clojure.java.jdbc   :as jdbc]
            [cheshire.core       :as json]
            [monger.core         :as mg]
            [monger.credentials  :as mg-cred]
            [monger.collection   :as mg-col]
            [monger.conversion   :as mg-conv]
            [app.manifest        :refer [app-config]]))

(def db-connection (delay
                    (let [connection (mg/connect-with-credentials (get-in app-config [:db :host]) (get-in app-config [:db :port]) (mg-cred/create (get-in app-config [:db :user]) (get-in app-config [:db :dbname]) (.toCharArray (get-in app-config [:db :password]))))
                          db         (mg/get-db connection (get-in app-config [:db :dbname]))]
                      db)))

(mg-col/find-maps @db-connection "Documents")
