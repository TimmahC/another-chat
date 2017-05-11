var express = require('express'),
	db 		= require('./db.js');


var router = express.Router();

router.get('/', function(req, res){
	res.render('collection');
})

router.get('/users', function(req, res){
	// var results = db.collection('users').find().toArray()
	// console.log(results)
	res.render('dbUsers');
	console.log(db);
})

router.get('/history', function(req, res){
})

module.exports = router;