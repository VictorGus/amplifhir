(ns app.auth.core-test
  (:require [app.auth.core :as sut]
            [app.db.core   :as db]
            [app.core]
            [matcho.core :as matcho]
            [ring.mock.request :as mock]
            [cheshire.core :as json]
            [clojure.test :refer :all]))

(def test-conn db/test-connection)

(def ctx* (app.core/prepare-ctx test-conn))

(defn prepare-db [conn]
  (db/purge-colls conn ["Client" "Patient" "Observation"]))

(defn name&secret->basic-auth [name secret]
  (let [s (str name ":" secret)]
    (str "Basic " (app.auth.encrypt/base64-encode s))))

(use-fixtures :each
  (fn [f]
    (prepare-db test-conn)
    (f)
    (prepare-db test-conn)))

(deftest basic-auth-test
  (testing "Basic auth hook"
    (let [app* (app.core/app ctx*)
          wrong-creds (name&secret->basic-auth "foo" "bar")
          right-creds (name&secret->basic-auth "root" "secret")
          _ (db/create test-conn :Client {:_id "root" :resource {:salt "123"
                                                                 :permissions "superuser"
                                                                 :password "16b079709ec458f2fa0769e0707b9f025355826e1732f4ac4e1b1734d4ea50ba"}})
          resp (app* (mock/header (mock/request :get "/Patient") :authorization wrong-creds))
          resp-right (app* (mock/header (mock/request :get "/Patient") :authorization right-creds))]
      (matcho/match 401 (:status resp))
      (matcho/match {:message "Client foo not found"} (json/parse-string (:body resp) true))
      (matcho/match 200 (:status resp-right))
      )))

(deftest bearer-token-auth-test
  (testing "Bearer token auth hook")
  )

(comment

  (create-pt (app.core/app ctx*) {:name [{:given  ["Foo"]
                                          :family "Bar"}]})

  ((app.core/app ctx*) (mock/json-body (mock/header (mock/request :post "/Patient") :authorization "Basic cm9vdDpzZWNyZXQ=") {:name [{:given  ["Foo"]
                                                                                                                                      :family "Bar"}]}))

  (db/create test-conn "Client" {})


  )

