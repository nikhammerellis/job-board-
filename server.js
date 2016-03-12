require('./config/mongoose');
var express = require('express'),
	morgan = require('morgan'),
	bodyParser = require('body-parser');

var app = express();
require('./config/routes/jobs.server.routes.js')(app);

app.use(morgan('dev'));

app.use(bodyParser.json());

app.use(express.static(__dirname+'/client'));

var port = 8000;

app.listen(port, function(){
	console.log("*******LISTENING ON "+port+"*******");
});
