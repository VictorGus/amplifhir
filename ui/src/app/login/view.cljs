(ns app.login.view
  (:require [re-frame.core :as rf]
            [reagent.core  :as r]
            [app.pages     :as pages]
            ["@ant-design/icons" :as icons]
            ["antd" :as antd]
            [app.login.model :as model]))

(pages/reg-subs-page
 model/index
 (fn [_]
   [:div "Hello worl"]
   ))
