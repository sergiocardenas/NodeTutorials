var myModule = require('./module');

var callback = function (error, list){
	if(error) throw error;
	list.forEach(function(elem){
		console.log(elem);
	});
}

myModule(process.argv[2], process.argv[3], callback);
