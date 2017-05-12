var express = require('express'),
	database = require('./db.js');



var router = express.Router();

router.get('/', function(req, res){
	res.render('collection');
})

router.get('/users', function(req, res){
	var db = database.getConnection()
	var cursor = db.collection('users').find()
	var results = cursor.toArray()
	results.then(function(rs){
		// console.log(results)

		res.render("dbUsers", {myList: rs})
	})
	
	// console.log(results)
})

router.get('/history', function(req, res){
})

module.exports = router;