(ns app.rest.utils)

(defn generate-uuid []
  (.toString (java.util.UUID/randomUUID)))
