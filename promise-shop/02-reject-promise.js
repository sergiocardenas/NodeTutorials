var q = require('q');
var defer = q.defer(); 

function errorFunc (err) {
        console.log(err.message); 
}

defer.promise.then(null, errorFunc);
setTimeout(defer.reject, 300, new Error("REJECTED!"));



