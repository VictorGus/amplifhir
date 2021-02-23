(ns app.sample-page.view
  (:require [re-frame.core :as rf]
            [reagent.core :as r]
            [app.pages :as pages]
            [app.styles :as styles]
            [zframes.redirect :as redirect]
            [app.sample-page.model :as model]))

(def input-style
  (styles/style
   [:.patient-grid
    [:.icon
     {:height "65px"
      :width "65px"
      :margin-top "10px"
      :padding-right "10px"}

     [:.icon.img
      {:fill "blue"}]]

    [:.patient-record
     {:display "flex"
      :text-decoration "none"
      :color "black"
      :padding "8px 8px"
      :margin-top "12px"
      :border-radius ".25rem"
      :border "1px solid rgba(51, 51, 51, 0.1)"}


     [:.patient-info
      {:display "flex"
       :flex-grow "1"
       :align-items "center"}

      [:.patient-address-value
       {:padding "5px 5px"}]

      [:.patient-name
       {:font-size "20px"}]
      ]]

    [:.right-wrapper
     [:.right-item
      {:text-align "right"}
      [:.patient-right-value
       {:padding "5px 5px"}]]]
    [:.patient-record:hover
     {:background-color "#e6f2ff"}]]
   [:.not-found {:font-size "22px"}]))

(defn item-view [data]
  [:a.patient-record
   {:href (str "/#/patient/" (:id data))}
   [:div.icon
    [:img {:src (case (:gender data)
                  "male"
                  "male.svg"
                  "female"
                  "female.svg"
                  "alien.svg")}]]
   [:div.patient-info
    [:div
     [:b.patient-name (str (get-in data [:resource :name :family])
                           (get-in data [:resource :name :given]))]
     [:span.text-muted.pl-2 "1992-10-11"]
     [:div
      [:span.text-muted
       "Line:"]
      [:span.patient-address-value (get-in data [:resource :address :line])]
      [:span.text-muted
       "City:"]
      [:span.patient-address-value (get-in data [:resource :address :city])]
      [:span.text-muted
       "State:"]
      [:span.patient-address-value (get-in data [:resource :address :state])]
      [:span.text-muted
       "Country:"]
      [:span.patient-address-value (get-in data [:resource :address :country])]]]]
   [:div.d-flex.align-items-center.right-wrapper
    [:div.right-item
     [:span.text-muted
      "Social Security Number:"]
     [:span.patient-right-value (get-in data [:resource :identifier])]]]])

(pages/reg-subs-page
 model/index
 (fn [data]
   [:div input-style
    [:div.d-flex.flex-row.w-100
     [:div
      {:style {:flex "1"}}
      [:input.form-control {:type "text"
                            :placeholder "Search..."
                            :on-change #(rf/dispatch [::redirect/set-params {:q (-> % .-target .-value)}])}]]
     [:div
      [:button.btn.btn-outline-primary.btn-block.ml-2
       "+ Create"]]]
    [:div.patient-grid.ml-1
     (for [item data]
       [item-view item])]]))
