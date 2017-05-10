var dbURL = "mongodb://localhost:27017/myproject"
var MongoClient = require('mongodb').MongoClient;

var database,
	isConnected = false;

MongoClient.connect(dbURL, function(err, db){
	if(!err){
		console.log("Database connected")
		isConnected = true
		database = db
	}
	else
		console.log(err);
});

module.exports = {
	getConnection: function() {
		if(database)
			return database;
		else
			return false;
	}
}