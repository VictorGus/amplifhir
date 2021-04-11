;;NOTE current implementation works as before create/update
;;NOTE hooks must return a map
(ns app.hook.core
  (:require [clojure.string :as str]
            [app.context]))

(defonce registered-hooks (atom {}))

(defn get-hooks []
  @registered-hooks)

(defn get-hook [hook-name]
  (get @registered-hooks hook-name))

(defn reg-hook [hook-name hook-trigger handler]
  (swap! registered-hooks assoc hook-name :handler handler
                                          :hook-trigger hook-trigger))

(defn append-hooks [hooks]
  (swap! registered-hooks merge hooks))

(defn- all? [v]
  (#{"all" :all} v))

(def Keyword clojure.lang.Keyword)

(defn- whole-module? [v]
  (#{String Keyword} (type v)))

(defn- in-module? [module v]
  ((set (:entities_list module)) v))

;;TODO - add call of hooks returning errors
(defn call-hooks [{:keys [request-method] :as req}
                  {:keys [entity modules operation] :as ctx}]
  (reduce-kv
   (fn [acc k {{:keys [operations resources]} :trigger handler :handler :as v}]
     (if (or
          (and (all? resources) (all? operations))

          (and (all? resources) (and (vector? operations)
                                     ((set operations) operation)))

          (and (and (whole-module? resources)
                    (in-module? (get modules resources) entity)) (all? operations))

          (and (and (whole-module? resources)
                    (in-module? (get modules resources) entity)) (and (vector? operations)
                                                                      ((set operations) operation)))

          (and (and (vector? resources)
                    ((set resources) entity)) (all? operations))

          (and (and (vector? resources)
                    ((set resources) entity)) (and (vector? operations)
                                                   ((set operations) operation))))
       (let [errors (handler ctx req)]
         (when errors
           (reduced errors)))
       nil))
   []
   (get-hooks)))

(comment

  {:history-track-hook {:trigger {:operations [:update :create]
                                  :resources :fhir}
                        :handler (fn [ctx req])}
   :authorization-hook {:trigger {:operations :all
                                  :resources  :all}}
   :validation-hook    {:trigger {:operations [:update :create]
                                  :resources  :fhir}}
   }

{:remote-addr "0:0:0:0:0:0:0:1",
 :params {:id "579027f4-bba1-4bfb-8767-711b22d45017"},
 :headers
 {"host" "localhost:9090",
  "user-agent"
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36",
  "cookie"
  "_ga=GA1.1.1767127373.1565948456; _ym_uid=1582735264317637471; ring-session=0a19a511-484e-443a-8fb6-7af8319765c7; jwt=null; ssid=MjM3NTI1NTItZWZmOC00YzliLThiNWYtZDc1ZTYwNjYwNDhk; _ym_d=1607370392; _gid=GA1.1.1401295185.1617625148",
  "connection" "keep-alive",
  "upgrade-insecure-requests" "1",
  "accept"
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
  "accept-language" "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
  "accept-encoding" "gzip, deflate, br",
  "cache-control" "max-age=0"},
 :server-port 9090,
 :form-params {},
 :websocket? false,
 :query-params {},
 :content-type nil,
 :character-encoding "utf8",
 :uri "/Patient/579027f4-bba1-4bfb-8767-711b22d45017",
 ;; :uri "/Patient",
 :server-name "localhost",
 :scheme :http,
 :request-method :get}

(reduce-kv (fn [acc k v]
             (if (= :error v)
               (reduced {k v})
               acc))
        []
        {:a 2 :b 3 :g :error})

  )
