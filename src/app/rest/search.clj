(ns app.rest.search
  (:require [clojure.set :as s]))

(defn build-query [params]
  (reduce-kv
   (fn [acc k v]
     (str acc "\"" v "\""))
   ""
   params))

(defn get-unknown-params [{{{resources :resources} :fhir} :modules :as ctx} params rt]
  (let [resource (rt resources)
        search-parameters (:search_parameters resource)]
    (vec (s/difference
          (set (keys params))
          (set (keys search-parameters))))))
