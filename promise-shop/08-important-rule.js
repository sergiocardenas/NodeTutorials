var q = require('q');
var defer = q.defer(); 

function iterate(i){
	console.log(i.toString());
	return ++i;
}

function throwMyGod(data){
	throw new Error("OH NOES");
}

q.fcall(iterate, 1)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(throwMyGod)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(null, console.log)
.done();
