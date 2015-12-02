//Hecho por Sergio Cardenas
var qio = require('q-io/http'); 

function parseJson(json) {
  console.log(JSON.parse(json));
}

qio.read("http://localhost:1337")
.then(parseJson)
.then(null,console.error)
.done();
