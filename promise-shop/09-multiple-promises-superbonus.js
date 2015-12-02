var q = require('q');
var deferOne = q.defer();
var deferTwo = q.defer();

q.all([deferOne.promise, deferTwo.promise])
.spread(function (resultOne,resultTwo) {
	console.log([resultOne,resultTwo]);
});


setTimeout(function () {
	deferOne.resolve("PROMISES");
	deferTwo.resolve("FTW");
}, 200);

