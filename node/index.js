var express = require('express');
var http = require('http');
var	redis = require('redis');

var app = express();

var addr = process.env.REDIS_PORT_6379_TCP_ADDR;
var por = process.env.REDIS_PORT_6379_TCP_PORT;

console.log(addr + ':' + por);

var client = redis.createClient('6379', 'redis');

app.get('/', function(req, res, next) {
	client.incr('counter', function(err, counter) {
		if(err) return next(err);
		res.send('This page has been viewed ' + counter + ' times!');
	});
});

http.createServer(app).listen(process.env.PORT || 8080, function() {
	console.log('Listening on port ' + (process.env.PORT || 8080));
});
