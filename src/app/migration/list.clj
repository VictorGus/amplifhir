(ns app.migration.list
  (:require [app.migration.search-param]
            [app.fhir.validation]))

(def migrations
  {:text-index         app.migration.search-param/text-index-migration})
