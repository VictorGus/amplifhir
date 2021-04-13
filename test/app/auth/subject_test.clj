(ns app.auth.subject-test
  (:require [app.auth.subject :as sut]
            [app.auth.encrypt]
            [matcho.core :as matcho]
            [clojure.test :refer :all]))

(deftest verifyin-test
  (testing "Verifying password test"
    (let [salt                    (app.auth.encrypt/get-salt)
          actual-encoded-password (app.auth.encrypt/sha256 (str "qweasdzxc" (app.auth.encrypt/base64-encode salt)))]
      (matcho/match
       true
       (sut/verify-secret "qweasdzxc" {:salt salt
                                       :password actual-encoded-password}))
      (matcho/match
       false
       (sut/verify-secret "definitely wrong password" {:salt salt
                                                       :password actual-encoded-password}))

      (matcho/match
       false
       (sut/verify-secret nil {:salt salt
                               :password actual-encoded-password})))))
