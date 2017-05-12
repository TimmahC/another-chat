var dbURI = "mongodb://localhost:27017/myproject"
var MongoClient = require('mongodb').MongoClient;

var database,
	isConnected = false;

MongoClient.connect(dbURI, function(err, db){
	if(!err){
		console.log("Database connected")
		isConnected = true
		database = db
		// console.log(db)
	}
	else
		throw (err);
});

module.exports = {
	getConnection: function() {
		if(database)
			return database;
		else
			return false;
	}
}