(ns app.rest.error)

;;TODO separate code for requested deleted resources
(defn make-operation-outcome [errors]
  {:resourceType "OperationOutcome"
   :issue (mapv
           (fn [{:keys [error-type sub-type diagnostics expression]}] ;;Currently there is no usage for sub-type
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
                                    :severity "error"}

                                   (= :invalid-search-param error-type)
                                   {:code "invalid"
                                    :severity "error"})]
               (merge resource-body (into {} (filter second (cond-> {:diagnostics diagnostics}
                                                              expression
                                                              (assoc :expression expression)))))))
           errors)})

(defn create-error [errors]
  (let [{:keys [error-type]} (last errors)
        status (case error-type
                 :unauthorized         401
                 :forbidden            403
                 :invalid-resource     422
                 :invalid-search-param 422
                 :not-found            404)
        operation-outcome-resource (make-operation-outcome errors)]
    {:status status
     :body operation-outcome-resource}))
