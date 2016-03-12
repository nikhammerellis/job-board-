var bodyParser = require('body-parser');

module.exports = function(app) {
	var jobs = require('../../server/controllers/jobs.server.controller.js');
	app.get('/jobs', function (req, res){
		jobs.show(req, res);
	});
	app.post('/jobs', bodyParser.json(), function (req, res){
		jobs.add(req, res);
	});
	app.put('/jobs', bodyParser.json(), function (req, res){
		jobs.update(req, res);
	});
	app.delete('/jobs', bodyParser.json(), function (req, res){
		jobs.delete(req, res);
	}); 
};