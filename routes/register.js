var express = require('express'),
	bodyParser = require('body-parser'),
	database 		= require('./db.js');

var router = express.Router();
var db = database.getConnection();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
	extended: true
}));

router.get('/', function(req, res){
	res.render('register');
	console.log(database.getConnection())
})

router.post('/', function(req, res){
	res.send('Register POST');
	console.log(req.body);

})

module.exports = router;