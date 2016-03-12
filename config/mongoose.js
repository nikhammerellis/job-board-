var mongoose = require('mongoose');
var fs = require('fs');
//connect to DB
mongoose.connect('mongodb://localhost/job-board');
//specify the path to all the models 
var models_path = __dirname + '/../server/models';

fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('.js') > 0) {
		require(models_path + '/' + file);
	}
});
