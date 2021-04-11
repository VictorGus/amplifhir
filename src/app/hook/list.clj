(ns app.hook.list
  (:require [app.fhir.validation :as validation]))

;;NOTE: the order is important. 1 - authorization 2 - validation 3 - history
;;NOTE: hooks must return nil or error (actual http response)
(def hooks
  (array-map :validation-hook {:trigger {:operations [:update :create]
                                         :resources :fhir}
                               :handler validation/validation-hook}))
