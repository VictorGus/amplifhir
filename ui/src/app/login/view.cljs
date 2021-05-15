(ns app.login.view
  (:require [re-frame.core :as rf]
            [reagent.core  :as r]
            [app.pages     :as pages]
            [clojure.string :as str]
            [goog.object :as gobj]
            ["@ant-design/icons" :as icons]
            ["antd" :as antd]
            [app.login.model :as model]))

(defn- get-path
  [component-name]
  (str/split component-name #"\."))

(defn component
  [component-name]
  (let [path (get-path component-name)]
    (r/adapt-react-class
     (apply gobj/getValueByKeys antd path))))

(pages/reg-subs-page
 model/index
 (fn [_]
   [:div.container.vh-100.d-flex.justify-content-center.align-items-center
    [:div.border {:style {:height "250px"
                          :width  "450px"}}
     [:div.p-3
      [(component "Input")]
      #_(.. antd -Input -Password)]]]
   ))
