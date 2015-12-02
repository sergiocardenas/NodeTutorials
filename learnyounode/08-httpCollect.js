//Hecho por Sergio Cardenas
var http = require('http');
var concatS = require('concat-stream');

var callback = function(response){
	response.setEncoding('utf8');
	var errorCallback = function(error){
		return console.error(error);
	}
	var concatCallback = function(data){
		
		console.log(data.length);
		console.log(data);
	}
	response.on('error', errorCallback);
	response.pipe(concatS(concatCallback));
}


http.get(process.argv[2], callback);
