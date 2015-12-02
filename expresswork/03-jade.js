//Hecho por Sergio Cardenas
var express = require('express');
var path = require('path');
var app = express();

app.set('view engine', 'jade');
app.set('views', path.join(process.argv[3], 'templates'));
app.get('/home', function(req, res) {
	res.render('index', {date: new Date().toDateString()});
});
app.listen(process.argv[2]);
