var mongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';

mongoClient.connect(url, function(err, db) {
   	if (err) throw err;

   	// db gives access to the database
	var docsCollection = db.collection('docs');
	var doc = {
    		firstName: process.argv[2],
    		lastName: process.argv[3]
	}

	docsCollection.insert(doc,function(err, data) {
   			if (err) throw err;
     			console.log(JSON.stringify(doc));
			db.close();	
    		})
});
