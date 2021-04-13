(ns app.auth.encrypt
  (:require [app.auth.utils :as u]
            [clojure.string :as str])
  (:import  [java.security MessageDigest]))

(defn base64-decode [base64-string & [as-bytes]]
  (let [decoder (java.util.Base64/getDecoder)]
    (if-not as-bytes
      (slurp (.decode decoder base64-string))
      (.decode decoder base64-string))))

(defn base64-encode [plain-string & [as-bytes]]
  (let [encoder (java.util.Base64/getEncoder)]
    (if-not as-bytes
      (slurp (.encode encoder (.getBytes plain-string)))
      (.encode encoder (.getBytes plain-string)))))

(defn sha256 [string]
  (let [digest (.digest (MessageDigest/getInstance "SHA-256") (.getBytes string "UTF-8"))]
    (apply str (map (partial format "%02x") digest))))

(defn get-salt []
  (let [uuid         (u/generate-uuid)
        [first-part] (str/split uuid #"-" 2)]
    (str (.toUpperCase first-part) (str/reverse first-part))))

