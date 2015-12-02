var q = require('q');
var defer = q.defer(); 

function errorFunc (err) {
        console.log(err.message); 
}

function parsePromised(json) {

	try{
		defer.resolve(JSON.parse(json));
	}catch(e){
		defer.reject(e);
	}
	return defer.promise;
}

parsePromised(process.argv[2]).then(null, console.log);
