(ns app.migration.list
  (:require [app.migration.search-param]
            [app.migration.subject]))

(def migrations
  {:text-index         app.migration.search-param/text-index-migration
   :super-subjects     app.migration.subject/auth-super-migration})
