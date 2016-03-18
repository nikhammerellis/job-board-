process.env.NODE_ENV = process.env.NODE_ENV || "development";

var mongoose = require('./config/mongoose'),
	express = require('./config/express');

var db = mongoose(); 
	
var app = express();

var port = 8000;

app.listen(port, function(){
	console.log("*******LISTENING ON "+port+"*******");
});

module.exports = app;
