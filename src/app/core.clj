(ns app.core
  (:require [clojure.java.io :as io]
            [route-map.core  :as rm]
            [cheshire.core   :as json]
            [ring.middleware.reload :refer [wrap-reload]]
            [ring.middleware.cors   :refer [wrap-cors]]
            [ring.middleware.params :refer [wrap-params]]
            [ring.middleware.json   :refer [wrap-json-response wrap-json-body]]
            [app.dbcore         :as db]
            [app.actions        :as action]
            [app.manifest       :as manifest]
            [app.rest.operation :as op]
            [app.rest.error     :as error]
            [app.rest.utils     :as u]
            [app.context        :as context]
            [org.httpkit.server :as server]
            [clojure.string     :as str]
            [app.fhir.operations]
            )
  (:gen-class))

(defn routes [ctx]
  (op/build-routes ctx))

(defn params-to-keyword [params]
  (reduce-kv (fn [acc k v]
               (assoc acc (keyword k) v)) {} params))

(defn handler [ctx]
  (fn [{meth :request-method uri :uri :as req}]
    (if-let [res (rm/match [meth uri] (routes ctx))]
      ((:match res) (-> (assoc req :params (params-to-keyword (:params req)))
                        (update-in [:params] merge (:params res))))
      (error/create-error {:error-type :not-found
                           :diagnostics (str "Operation " (.toUpperCase (name meth)) " " uri " not found")}))))

(defn preflight
  [{meth :request-method hs :headers :as req}]
  (let [headers (get hs "access-control-request-headers")
        origin (get hs "origin")
        meth  (get hs "access-control-request-method")]
    {:status 200
     :headers {"Access-Control-Allow-Headers" headers
               "Access-Control-Allow-Methods" meth
               "Access-Control-Allow-Origin" origin
               "Access-Control-Allow-Credentials" "true"
               "Access-Control-Expose-Headers" "Location, Transaction-Meta, Content-Location, Category, Content-Type, X-total-count"}}))

(defn allow [resp req]
  (let [origin (get-in req [:headers "origin"])]
    (update resp :headers merge
            {"Access-Control-Allow-Origin" origin
             "Access-Control-Allow-Credentials" "true"
             "Access-Control-Expose-Headers" "Location, Content-Location, Category, Content-Type, X-total-count"})))

(defn handle-input-stream [{:keys [body]}]
  (if (and body
           (instance? org.httpkit.BytesInputStream body))
    (json/parse-string (slurp body) true)
    body))

(defn mk-handler [dispatch]
  (fn [{headers :headers uri :uri :as req}]
    (if (= :options (:request-method req))
      (preflight req)
      (let [req (merge req {:body (handle-input-stream req)})
            resp (dispatch req)]
        (-> resp (allow req))))))

(defn app [ctx]
  (-> (handler ctx)
      mk-handler
      wrap-json-body
      wrap-params
      wrap-json-response
      wrap-reload))

(defonce state (atom nil))

(defn stop-server []
  (when-not (nil? @state)
    (@state :timeout 100)
    (reset! state nil)))

(defn start-server []
  (let [db-connection db/db-connection
        _ (swap! context/global-context assoc :db/connection db-connection)
        app* (app (swap! context/global-context
                         #(merge % {:api (merge-with merge
                                                     {}
                                                     (app.fhir.operations/shape-up-routes @context/global-context))}
                                 (dissoc (:app manifest/app-config) :port))))]
    (reset! state (server/run-server app* {:port 9090}))))

(defn restart-server [] (stop-server) (start-server))

(defn -main [& [_ _]]
  (start-server)
  (println "Server started"))

(comment
  (restart-server)

  )
