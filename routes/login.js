var express = require('express'),
	db 		= require('./db.js');


var router = express.Router();

router.get('/', function(req, res){
	res.render('login');
})

router.post('/', function(req, res){
	res.send('LOGIN POST');
	console.log('LOGIN POST');

})

module.exports = router;