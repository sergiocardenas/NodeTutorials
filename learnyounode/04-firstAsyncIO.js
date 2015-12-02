//Hecho por Sergio Cardenas
var fs = require('fs');

function callback(error, data){
	if(error) throw error;
	console.log((data.split('\n').length-1));
	
}

if(process.argv.length > 2){
	var str = fs.readFile(process.argv[2], 'utf8',callback);
}
