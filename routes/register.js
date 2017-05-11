var express = require('express'),
	bodyParser = require('body-parser'),
	database = require('./db.js');

var router = express.Router();
var db = database.getConnection();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
	extended: true
}));

router.get('/', function(req, res){
	res.render('register');
	
})

router.post('/', function(req, res){
	res.send('Register POST');
	var data = req.body;

	db.collection('users').save({
		email: data.email,
		password: data.password
	})

})

module.exports = router;