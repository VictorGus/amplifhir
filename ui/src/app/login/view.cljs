(ns app.login.view
  (:require [re-frame.core :as rf]
            [reagent.core  :as r]
            [app.pages     :as pages]
            [clojure.string :as str]
            [goog.object :as gobj]
            [app.ant-design.components :as ant]
            [app.inputs :as input]
            [app.login.model :as model]
            [zframes.title :as title]))


(pages/reg-subs-page
 model/index
 (fn [_]
   (title/change-title "Amplifhir login")
   [:div.container.vh-100.d-flex.justify-content-center.align-items-center
    [:div
     [:div.text-center.mb-2.h3 "Please, sign in to proceed"]
     [:div.border
      [:div.p-5
       [(ant/component "Form") {:onFinish #(rf/dispatch [::model/sign-in (js->clj %)])}
        [(ant/component "Form.Item") {:label "Username"
                                      :name "username"
                                      :rules [{:required true :message "Input your username"}]}
         [(ant/component "Input")]]
        [(ant/component "Form.Item") {:label "Password"
                                      :name "password"
                                      :rules [{:required true :message "Input your password"}]}
         [(ant/component "Input.Password")]]
        [:div.d-flex.justify-content-end
         [(ant/component "Button") {:type "primary"
                                    :htmlType "submit"} "Submit"]]]
       ]]
     [:div.text-center.mt-4.h3
      [:span
       [:i.fas.fa-burn {:style {:color "#ffad5c"}}]
       [:span.ml-2 {:style {:font-family "Roboto"}} "Amplifhir"]]]
     ]]
   ))
