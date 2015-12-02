var q = require('q');
var deferOne = q.defer();
var deferTwo = q.defer();

function all(defer1, defer2){
	var deferAll = q.defer();
	var counter = 0;
	var counter1, counter2;
	
	defer1.then(function (count) {
    		counter1 = count;
    		counter++;
   		if (counter == 2) deferAll.resolve([counter1, counter2]);
  	}).then(null, deferAll.reject)
 	  .done();
	
	defer2.then(function (count) {
    		counter2 = count;
    		counter++;
   		if (counter == 2) deferAll.resolve([counter1, counter2]);
  	}).then(null, deferAll.reject)
 	  .done();

	return deferAll.promise;	
}

all(deferOne.promise, deferTwo.promise)
.then(console.log)
.done();


setTimeout(function () {
  deferOne.resolve("PROMISES");
  deferTwo.resolve("FTW");
}, 200);

