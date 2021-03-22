(ns app.migration.list
  (:require [app.migration.search-param :as sp]))

(def migrations
  {:text-index sp/text-index-migration})
