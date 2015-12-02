//Hecho por Sergio Cardenas
var mongodb = require('mongodb');
var mongo = mongodb.MongoClient;

var url = "mongodb://localhost:27017/learnyoumongo";


mongo.connect(url, function(err, db) {
   	// db gives access to the database
   	if (err) throw err;

	var fileAge = parseInt(process.argv[2]);
	if(!isNaN(fileAge)){
		var parrotColletion = db.collection('parrots');
		parrotColletion.count({
		      age: { $gt: +fileAge }
    		},function(err, count) {
   			if (err) throw err;
     			console.log(count);
			db.close();
    			
    		})

	}


});

