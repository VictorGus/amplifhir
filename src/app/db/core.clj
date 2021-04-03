(ns app.db.core
  (:require [cheshire.core       :as json]
            [monger.core         :as mg]
            [monger.credentials  :as mg-cred]
            [monger.collection   :as mg-col]
            [monger.conversion   :as mg-conv]
            [monger.operators    :as mg-ops]
            [monger.result       :as mg-res]
            [monger.query        :as mg-q]
            [app.manifest        :refer [app-config]]))

(defonce operators-dictionary
  {:gt          mg-ops/$gt
   :gte         mg-ops/$gte
   :lt          mg-ops/$lt
   :lte         mg-ops/$lte
   :all         mg-ops/$all
   :in          mg-ops/$in
   :nin         mg-ops/$nin
   :eg          mg-ops/$eq
   :ne          mg-ops/$ne
   :elemMatch   mg-ops/$elemMatch
   :regex       mg-ops/$regex
   :options     mg-ops/$options
   :where       mg-ops/$where
   :and         mg-ops/$and
   :or          mg-ops/$or
   :nor         mg-ops/$nor
   :inc         mg-ops/$inc
   :mul         mg-ops/$mul
   :set         mg-ops/$set
   :unset       mg-ops/$unset
   :setOnInsert mg-ops/$setOnInsert
   :rename      mg-ops/$rename
   :push        mg-ops/$push
   :position    mg-ops/$position
   :each        mg-ops/$each
   :addToSet    mg-ops/$addToSet
   :pop         mg-ops/$pop
   :pull        mg-ops/$pull
   :pullAll     mg-ops/$pullAll
   :bit         mg-ops/$bit
   :exists      mg-ops/$exists
   :mod         mg-ops/$mod
   :type        mg-ops/$type
   :size        mg-ops/$size
   :not         mg-ops/$not
   :match       mg-ops/$match
   :text        mg-ops/$text
   :search      mg-ops/$search
   :language    mg-ops/$language
   :natural     mg-ops/$natural
   :currentDate mg-ops/$currentDate
   :count       mg-ops/$count})

(defn- get-operator [k]
  (k operators-dictionary))

(defn- create-client [user password dbname]
  (mg-cred/create user dbname (.toCharArray password)))

(defn- create-connection [{{:keys [host port user dbname password]} :db :as config}]
  (let [client (create-client user password dbname)]
    (mg/connect-with-credentials host port client)))

(defn- extract-db [connection dbname]
  (mg/get-db connection dbname))

(defn- enrich-object [object]
  (clojure.walk/postwalk (fn [k]
                           (if (keyword? k)
                             (if-let [op (get-operator k)]
                               op
                               k)
                             k))
                         object))

(defn- get-connection [{{:keys [dbname]} :db :as config}]
  (let [connection (create-connection config)
        db (extract-db connection dbname)]
    db))

(def db-connection (delay (get-connection app-config)))

(defn truncate-collection [db collection]
  (mg-col/remove @db collection))

(defn create [db collection object]
  (mg-col/insert-and-return @db collection object))

(defn create-batch [db collection objects]
  (mg-col/insert-batch @db collection objects))

(defn search [db collection query]
  (let [query* (enrich-object query)]
    (mg-col/find-maps @db collection query*)))

(defn search-by-id [db collection id]
  (mg-col/find-map-by-id @db collection id))

(defn update
  ([db collection query object]
   (let [object* (enrich-object object)]
     (mg-col/update @db collection query object*)))
  ([db collection query object {:keys [upsert] :as ops}]
   (let [object* (enrich-object object)]
     (mg-col/update db collection query object* {:upsert upsert}))))

(defn update-by-id
  ([db collection id object]
   (let [object* (enrich-object object)]
     (mg-col/update-by-id @db collection id object*)))
  ([db collection id object {:keys [upsert] :as ops}]
   (let [object* (enrich-object object)]
     (mg-col/update-by-id @db collection id object* {:upsert upsert}))))

(defn drop-index
  ([db collection]
   (mg-col/drop-indexes @db collection))
  ([db collection index-name]
   (mg-col/drop-index @db collection index-name)))

(defn delete [db collection query]
  (mg-col/remove @db collection query))

(defn delete-by-id [db collection id]
  (mg-col/remove-by-id @db collection id))

(defn ensure-index [db collection keys name]
  (mg-col/ensure-index @db keys {:name name}))

(defn count-documents
  ([db collection]
   (mg-col/count @db collection))
  ([db collection query]
   (let [query* (enrich-object query)]
     (mg-col/count @db collection query*))))

(def updated-existing? mg-res/updated-existing?)

(def acknowledged? mg-res/acknowledged?)

(def affected-count mg-res/affected-count)

(comment

  (mg-col/insert-and-return @db-connection "documents" {:name "Monger"
                                                        :_id "123"})

  (mg-col/count @db-connection "documents")

  (mg-col/find-maps @db-connection "Patient" {mg-ops/$text {mg-ops/$search "\"Given\" \"Test\""}})

  (mg-col/find-maps @db-connection "Patient" {mg-ops/$text {mg-ops/$search "\"Given\" \"Test\""}})

  (mg-col/find-maps @db-connection "Patient" {mg-ops/$text {mg-ops/$search "\"City\"\"Given\""}})

  (mg-col/indexes-on @db-connection "Observation")

  (mg-col/ensure-index @db-connection :Patient {:name "text" :name.family "text" :name.given "text"} {:name "patient_text"})

  (mg-col/update @db-connection "Patient" {:_id "f7188e01-7eaf-4aa8-888c-8e496e41e608"} {mg-ops/$set {:address [{:city "City"}]}})

  (mg-col/update @db-connection "Migration" {:_id "test"} {mg-ops/$currentDate {:test true}})

  (update-by-id db-connection "Migration" "test" {:currentDate {:completedDateTime true}})

  (search-by-id db-connection "Patient" 123456)

  (count-documents db-connection "Patient_history" {:id "579027f4-bba1-4bfb-8767-711b22d45017"})

  (drop-index db-connection "Patient")

  (delete-by-id db-connection :Migration 1234567)

  (search-by-id db-connection :Patient "f7188e01-7eaf-4aa8-888c-8e496e41e608")

  (create db-connection "Patient" {:_id 1234567
                                   :name {:given ["Given1"] :family "Foobar1"}
                                   :resourceType "Patient"})

  (apply count-documents [db-connection "Patient_history" {:id "579027f4-bba1-4bfb-8767-711b22d45017"}])


  )
