(ns app.rest.search
  (:require [clojure.set    :as s]
            [app.rest.error :as error]
            [app.db.core    :as db]))

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

(defn search [{conn :db/connection rt :entity :as ctx}]
  (fn [{:keys [params] :as request}]
    (let [unkwn (get-unknown-params ctx params rt)]
      (println params)
      (if (not-empty params)
        (if (empty? unkwn)
          (let [q-str (build-query params)
                q-res (db/search conn rt {:text {:search q-str}})]
            {:status 200
             :body {:resourceType "Bundle"
                    :total (count q-res)
                    :entry q-res}})
          (let [error-msgs (map
                            #(hash-map :diagnostics (str "No such search parameter - " (name rt) "." (name %))
                                       :error-type  :invalid-search-param)
                            unkwn)]
            (error/create-error error-msgs)))
        (let [q-res (db/search conn rt {})]
          {:status 200
           :body {:resourceType "Bundle"
                  :total (count q-res)
                  :entry q-res}})))))

(comment

  )
