var express = require('express'),
		MongoClient = require('mongodb').MongoClient;

var app = express();

var monaddr = process.env.COMPOSE_MONGO_1_PORT_27017_TCP_ADDR;
var monport = process.env.COMPOSE_MONGO_1_PORT_27017_TCP_PORT;

console.log(monaddr + ':' + monport);

MongoClient.connect("mongodb://"+monaddr+":"+monport+"/exampleDb", function(err, db) {
	if (err) {
		console.log(err);
	}

	var collection = db.collection('test');
	var doc1 = { 'hello':'doc1' };
	var doc2 = { 'hello':'doc2' };
	
	collection.insert(doc1);
	collection.insert(doc2, {w:1}, function(err, res) {});
 
});

app.get('/', function(req, res) {
	res.send('Hello World\n');
});

app.listen(8080);
	console.log('Listening on port ' + (process.env.PORT || 8080));


