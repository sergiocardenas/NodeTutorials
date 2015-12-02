//Hecho por Sergio Cardenas
var express = require('express');
var fs = require('fs');

var app = express();

app.get('/books', function(req, res) {

	var str = fs.readFile(process.argv[3], 'utf8',function(err, data){
		if(err){
			res.sendStatus(500);
			throw error;
		}
		try{
			book = JSON.parse(data);
			res.json(book);
		} catch (e) {
          		res.sendStatus(500);
		}

	});
});
app.listen(process.argv[2]);
