var express = require('express'),
	morgan = require('morgan'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override');

module.exports = function(){
	var app = express();

	app.use(morgan('dev'));
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());
	app.use(methodOverride());

	require('../config/routes/jobs.server.routes.js')(app);

	app.use(express.static('./client'));

	return app;
}