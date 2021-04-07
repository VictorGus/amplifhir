(ns app.hook.list)

(def hooks
  {:validation-hook {:trigger {:operations [:update :create]
                               :resources :fhir}
                     :handler (fn [ctx req]
                                (println "test"))}})
