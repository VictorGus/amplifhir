(ns app.migration
  (:require [app.dbcore :as db]))

(defn reg-migration [ctx migration-key migration-body]
 (assoc-in ctx [:migration migration-key]))
