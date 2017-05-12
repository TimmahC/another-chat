var express = require('express'),
	bodyParser = require('body-parser'),
	database = require('./db.js');

var router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
	extended: true
}));

router.get('/', function(req, res){
	res.render('register');
	
})

router.post('/', function(req, res){

	var db = database.getConnection();
	
	var data = req.body;

	db.collection('users').insert({
		email: data.email,
		password: data.password,
		date: new Date()
	})
	res.redirect('/') 
	console.log(req.body)
})



module.exports = router;