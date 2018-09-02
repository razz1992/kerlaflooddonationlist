var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/donorsdb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!  ", db);
  db.close();
});
