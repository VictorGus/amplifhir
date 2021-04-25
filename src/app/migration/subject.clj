(ns app.migration.subject
  (:require [cheshire.core    :as json]
            [app.rest.utils   :as u]
            [app.db.core      :as db]
            [app.auth.subject :as s]
            [clojure.java.io  :as io]
            [clojure.string   :as str]))

(defn auth-super-migration
  [{conn :db/connection {{super-user   :super_user
                          super-client :super_client} :auth} :modules :as ctx}]
  (let [{client-id :_id :as enriched-client} (s/shape-super super-client)
        {user-id   :_id  :as enriched-user}   (s/shape-super super-user)]
    (db/create conn :Client {:_id client-id
                             :resource (dissoc enriched-client :_id)})
    (db/create conn :User   {:_id user-id
                             :resource (dissoc enriched-user :_id)})))

