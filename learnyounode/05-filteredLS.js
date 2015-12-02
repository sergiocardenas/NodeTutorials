//Hecho por Sergio Cardenas
var fs = require('fs');
var path = require('path');

function callback(error, list){
	if(error) throw error;
	for(var i = 0; i < list.length; i++){
		if(path.extname(list[i]) == ('.'+process.argv[3])){
			console.log(list[i]);
		}
	}
	
}

if(process.argv.length > 3){
	var str = fs.readdir(process.argv[2],callback);
}
