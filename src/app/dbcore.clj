(ns app.dbcore
  (:require [cheshire.core       :as json]
            [monger.core         :as mg]
            [monger.credentials  :as mg-cred]
            [monger.collection   :as mg-col]
            [monger.conversion   :as mg-conv]
            [app.manifest        :refer [app-config]]))

(defn create-client [user password dbname]
  (mg-cred/create user dbname (.toCharArray password)))

(defn create-connection [{{:keys [host port user dbname password]} :db :as config}]
  (let [client (create-client user password dbname)]
    (mg/connect-with-credentials host port client)))

(defn extract-db [connection dbname]
  (mg/get-db connection dbname))

(defn get-connection [{{:keys [dbname]} :db :as config}]
  (let [connection (create-connection config)
        db (extract-db connection dbname)]
    db))

(def db-connection (delay (get-connection app-config)))
