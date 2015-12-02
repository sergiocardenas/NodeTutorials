//Hecho por Sergio Cardenas
var qio = require('q-io/http'); 
function parseJson(json) {
	console.log(JSON.parse(json));
}

qio.read({url:"http://localhost:7000",
	  method: "GET"})
.then(function (id) {
	return qio.read({url:"http://localhost:7001/"+id,
	  		 method: "GET"});
})
.then(parseJson)
.then(null,console.error)
.done();
