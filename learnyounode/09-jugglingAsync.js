//Hecho por Sergio Cardenas
var http = require('http');
var concatS = require('concat-stream');



var urls = process.argv.slice(2);
var results = [];

// initialise results array
for (i = 0; i < urls.length; i++) {
  results[i] = null;
}

for(var j = 0; j < urls.length; j++){
	(function (i){
         http.get(urls[i], function(response){
		response.setEncoding('utf8');
		var errorCallback = function(error){
			return console.error(error);
		}
		var concatCallback = function(data){
			results[i] = data;
			var allResults = 0;
			results.forEach(function(item){
				if(item != null){
					allResults += 1;
				}
			});
			if(allResults == results.length){
				results.forEach(function(item){
					console.log(item);
				});
			}
		}
		response.on('error', errorCallback);
		response.pipe(concatS(concatCallback));
	});
        })(j)
}
