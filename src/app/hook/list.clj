(ns app.hook.list
  (:require [app.fhir.validation :as validation]
            [app.auth.hooks      :as auth]))

;;NOTE: the order is important. 1 - authorization 2 - validation 3 - history
;;NOTE: hooks must return nil or error (actual http response)
(def hooks
  (array-map
   :auth-hook       {:trigger {:operations :all
                               :resources  :all}
                     :handler auth/auth-hook}
   :validation-hook {:trigger {:operations [:update :create]
                               :resources :fhir}
                     :handler validation/validation-hook}
   :history-hook    {:trigger {:operations [:update :create :delete]
                               :resources :fhir}
                     :handler {}}))
