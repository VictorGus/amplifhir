(ns app.rest.module
  (:require [app.context :as context]))

(defonce registered-modules (atom {}))

(defn create-module [module-key module-fn]
  (let [ctx (context/get-context)]
    (swap! registered-modules assoc module-key (module-fn ctx))))

(defn extract-routes []
  (reduce-kv
   (fn [acc k v]
     (merge acc (:api v)))
   {}
   @registered-modules))
