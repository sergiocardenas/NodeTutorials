//Hecho por Sergio Cardenas
var fs = require('fs');

// note you can avoid the .toString() by passing 'utf8' as the  
// second argument to readFileSync, then you'll get a String!  
//  
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1  
if(process.argv.length > 2){
	var str = fs.readFileSync(process.argv[2]).toString();
	var strArray = str.split('\n');
	console.log((strArray.length-1));
}
