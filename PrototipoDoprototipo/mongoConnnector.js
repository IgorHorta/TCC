var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://localhost:27017/pcForge';



var findProducts = function(db, callback) {
   var cursor =db.collection('products').find({"category":"ssd"});
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
         console.dir(doc);
      } else {
         callback();
      }
   });
};




MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  findProducts(db, function(){
	  db.close();
  });
});