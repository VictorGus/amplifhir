(ns app.rest.utils
  (:require [clojure.java.io :as io]
            [cheshire.core   :as json]))

(defn generate-uuid []
  (.toString (java.util.UUID/randomUUID)))

(defn edn-resource->map [f]
  (-> (io/resource f) slurp read-string))
