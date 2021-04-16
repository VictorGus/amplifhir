(ns app.auth.core
  (:require [clojure.string   :as str]
            [app.db.core      :as db]
            [app.auth.encrypt :as e]
            [app.auth.subject :as s]
            [app.auth.utils   :as u]
            )
  (:import [java.security MessageDigest]))

(defn extract-auth-type [authorization-header]
  (some-> authorization-header (str/split #" ") first .toLowerCase keyword))

(defmulti authenticate (fn [headers _ _] (-> headers u/headers-to-keywords :authorization extract-auth-type)))

(defmethod authenticate :bearer [_ req ctx]
  (let [{:keys [authorization]} (u/headers-to-keywords (:headers req))]
    (e/base64-decode authorization)))

(defmethod authenticate :basic [_ req {conn :db/connection :as ctx}]
  (let [{:keys [authorization]} (u/headers-to-keywords (:headers req))]
    (let [decoded-auth-string     (e/base64-decode authorization)
          [client secret]         (str/split decoded-auth-string #":")]
      (if-let [subj (first (db/search-by-id conn :Client client))]
        (if (s/verify-secret secret subj)
          (assoc (select-keys subj [:_id])
                 :permissions
                 (get-in subj [:resource :permissions]))
          {:status 401
           :body {:message "Provided credentials are invalid"}})
        {:status 401
         :body {:message (str "Client " client " not found")}}))))

(defn authorize [permissions {:keys [request-method uri] :as req}
                 {:keys [entity modules operation] :as ctx}]
  (if (= :superuser permissions)
    :granted
    (if (not-empty (s/verify-permissions permissions ctx))
      :granted
      {:status 403
       :body {:message (str "Operation " (.toUpperCase (name request-method)) " " uri " is not permitted")}})))

(defn get-access [req ctx]
  (if (:authorization (u/headers-to-keywords (:headers req)))
    (let [auth-res (authenticate (:headers req) req ctx)]
      (if-let [permissions (:permissions auth-res)]
        (let [authorization-res (authorize permissions req ctx)]
          (when-not (= :granted authorization-res)
            authorization-res))
        auth-res))
    {:status 401
     :body {:message "Unauthorized"}}))

(comment

  ;;(filter approve-req permissions)
  (filter
   (s/verify-permissions [{:operations (map name [:create :read :update :delete])
                           :entities   (map name [:Patient])}])
   )


  ;;Client
  {:_id 123
   :name "Test"
   :password "sha256(base64encode(salt)+password)"
   :salt "plain-text-salt"
   :permissions [{:operations [:CREATE :READ :UPDATE :DELETE]
                  :entities   :fhir}]}

  {:_id 123
   :name "admin"
   :password "sha256(base64encode(salt)+password)"
   :salt "plain-text-salt"
   :permissions :superuser}


  )
