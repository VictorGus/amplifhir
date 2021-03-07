(ns app.rest.error)

;;TODO separate code for requested deleted resources
(defn make-operation-outcome [{:keys [error-type sub-type]}]
  (let [resource-body (cond
                        (= :invalid-resource error-type)
                        {:code "invalid"
                         :severity "fatal"}

                        (= :unauthoried error-type)
                        {:code     "login"
                         :severity "error"}

                        (= :forbidden error-type)
                        {:code "forbidden"
                         :severity "error"}

                        (= :not-found error-type)
                        {:code "not-found"
                         :severity "error"})]
    {:issue [(merge resource-body {:diagnostic "TODO"
                                   :location   "TODO"
                                   :expression "TODO"})]
     :resourceType "OperationOutcome"}))

(defn create-error [{:keys [error-type sub-type] :as error}]
  (let [status (case error-type
                 :unauthorized     401
                 :forbidden        403
                 :invalid-resource 422
                 :not-found        404)
        operation-outcome-resource (make-operation-outcome error)]
    {:status status
     :body operation-outcome-resource}))
