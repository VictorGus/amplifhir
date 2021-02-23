db.createUser({
  user: "root",
  pwd:  "root",
  roles: [{
    role: "readWrite",
    db: "amplifhir-db"}]
})
