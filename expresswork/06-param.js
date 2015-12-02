//Hecho por Sergio Cardenas
var express = require('express');
var crypto = require('crypto')

var app = express();

app.put('/message/:id', function(req, res) {
	var cryptedID;
	if(req.params.id){
		cryptedID = crypto
			.createHash('sha1')
      			.update(new Date().toDateString() + req.params.id)
      			.digest('hex');
	}
	res.send(cryptedID);
});
app.listen(process.argv[2]);
