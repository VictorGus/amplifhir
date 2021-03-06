(ns app.context)

(defonce global-context (atom {}))

(defn get-context []
  @global-context)
