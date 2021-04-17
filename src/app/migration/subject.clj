(ns app.migration.subject
  (:require [cheshire.core   :as json]
            [app.rest.utils  :as u]
            [app.db.core     :as db]
            [clojure.java.io :as io]
            [clojure.string  :as str]))

(defn auth-subject-migration [{conn :db/connection :as ctx}]
  (db/ensure-index conn rn exps (str (name rn) "_text")))

