//Hecho por Sergio Cardenas

//Document Model:
//{
//    "name": "Tshirt",
//    "size": "S",
//    "price": 10,
//    "quantity": 12
//    "meta": {
//      "vendor": "hanes",
//      "location": "US"
//    }
//}

var mongo = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/learnyoumongo";

mongo.connect(url, function(err, db) {
   	// db gives access to the database
   	if (err) throw err;
	
	db.collection('prices').aggregate([
		{ $match: { size: process.argv[2]} },
		{ $group: { _id: 'total',total: {$avg: '$price'}}}
	]).toArray(function(err, docs) {
    		if (err) throw err;
    		console.log(Number(docs[0].total).toFixed(2));
    		db.close()
	});

});
