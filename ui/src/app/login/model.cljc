(ns app.login.model
  (:require [re-frame.core  :as rf]))

(def index ::index)

(rf/reg-sub
 index
 (fn [db]
   {}))

(rf/reg-event-fx
 index
 (fn [{db :db} [pid phase {params :params}]]
   (cond
     (= phase :deinit)
     {}
     (= phase :init)
     {})))

(rf/reg-event-fx
 ::sign-in
 (fn [{db :db} [_ values]]
   (let [{:keys [username password]} (clojure.walk/keywordize-keys values)]
     #_(let [encoded #?(:clj  (String. (.encodeToString (Base64/getEncoder) (get-in db [form/form-path :password])))
                        :cljs (js/btoa (get-in db [form/form-path :password])))]
         {:xhr/fetch  {:uri"/Login/"
                       :body {:login (get-in db [form/form-path :login])
                              :password encoded}
                       :method "POST"
                       :success {:event ::success-redirect}
                       :req-id index}}))))
