SHELL = bash

MONGO_IMAGE ?= mongo:latest
MONGO_PORT  ?= 27017
MONGO_DATABASE ?= amplifhir-db
MONGO_USER ?= root
MONGO_PASSWORD ?= root
MONGO_HOST ?= localhost

.EXPORT_ALL_VARIABLES:
.PHONY: test build

# repl:
# 	rm -rf .cpcache/ && rm -rf ui/.cpcache/ && DEBUG=true && cd ui && clojure -A:dev:test:nrepl

repl:
	clojure -A:test:nrepl -m nrepl.cmdline --middleware "[cider.nrepl/cider-middleware]"

build:
	clojure -A:build
	mv target/app-1.0.0-SNAPSHOT-standalone.jar app.jar

ui-build:
	cd ui && clojure -m build

run-jar:
	java -jar app.jar

test:
	clojure -A:test:runner

ui-test:
	cd ui && clj -A:test:runner

up:
	docker-compose up -d

down:
	docker-compose down

docker-build:
	docker build -f Dockerfile -t victor13533/web-test .

pub:
	docker push victor13533/web-test:latest

pub-ui:
	docker push victor13533/web-test-ui:latest
