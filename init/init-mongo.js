
db.createUser({
  user: "root",
  pwd:  "root",
  roles: [{role: "readWrite",
           db: "amplifhir-db"}]})

db = db.getSiblingDB('amplifhir-test');
db.createUser({
  user: "root",
  pwd:  "root",
  roles: [{role: "readWrite",
           db: "amplifhir-test"}]})
