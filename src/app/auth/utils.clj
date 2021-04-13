(ns app.auth.utils
  (:import [java.security MessageDigest]))

(defn headers-to-keywords [headers]
  (reduce-kv
   (fn [acc k v]
     (assoc acc (keyword k) v))
   {}
   headers))

(defn generate-uuid []
  (.toString (java.util.UUID/randomUUID)))

