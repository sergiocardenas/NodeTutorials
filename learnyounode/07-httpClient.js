var http = require('http');

var options = {
	hostname: process.argv[2]
}

var callback = function(response){
	response.setEncoding('utf8');
	var dataCallback = function(dataString){
		console.log(dataString);
	}
	var errorCallback = function(error){
		return console.error(error);
	}
	response.on('data',dataCallback);
	response.on('error', errorCallback);
}


http.get(process.argv[2], callback);
