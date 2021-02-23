(ns app.sample-page.model
  (:require [re-frame.core  :as rf]
            [clojure.string :as str]))

(def index ::index)
(def show-index ::show)

(rf/reg-event-fx
 index
 (fn [{db :db} [pid phase params]]
   (cond
     (= :deinit phase)
     {}
     (or (= :params phase) (= :init phase))
     {:dispatch [::set-loading-status-true]
      :xhr/fetch {:uri "/Patient/$search"
                  :params {:search-query (if (get-in params [:params :q])
                                           (str/replace (get-in params [:params :q]) #" " "%20")
                                           "%20")}
                  :req-id ::patients-search}})))

(rf/reg-sub
 index
 :<- [:xhr/response ::patients-search]
 (fn [{data :data}]
   (:entry data)))
