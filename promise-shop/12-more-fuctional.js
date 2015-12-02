//Hecho por Sergio Cardenas
var qio = require('q-io/http'); 
var _ = require('lodash');

var bindURL = _.bind(String.prototype.concat, "http://localhost:7001/");

qio.read({url:"http://localhost:7000",
	  method: "GET"})
.then(_.compose(qio.read, bindURL))
.then(_.compose(console.log, JSON.parse))
.then(null,console.error)
.done();
