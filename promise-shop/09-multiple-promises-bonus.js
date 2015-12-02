var q = require('q');
var deferOne = q.defer();
var deferTwo = q.defer();

q.all([deferOne.promise, deferTwo.promise])
.then(console.log)
.done();

setTimeout(function () {
  deferOne.resolve("PROMISES");
  deferTwo.resolve("FTW");
}, 200);

