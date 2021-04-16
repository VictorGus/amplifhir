(ns app.auth.hooks
  (:require [app.auth.core :as auth]))

(defn auth-hook [{:keys [entity] :as ctx} req]
  (auth/get-access req ctx))
