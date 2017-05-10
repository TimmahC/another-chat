var express = require('express'),
	login	= require('./routes/login'),
	register = require('./routes/register');
	db = require('./routes/db.js');

var app = express();


app.set('views', './templates');
app.set('view engine', 'pug');

app.use('/login', login);
app.use('/register', register);

app.get('/', function(req, res){
	res.render('index')
})


app.listen(3000, function(){
	console.log('Server up!')
})