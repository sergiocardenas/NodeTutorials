var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, callback){
	var moduleCallback = function(error, list){
		if(error){
			return callback(error);
		}
		var filterF = function(elem){
			return (path.extname(elem) == ('.'+ext));
		}
		var filterList = list.filter(filterF);
		callback(null, filterList);
	}
	fs.readdir(dir,moduleCallback);
}
