var mongoose = require('mongoose');

var JobSchema = new mongoose.Schema({
	title: String,
	description: String
});

mongoose.model('Job', JobSchema);
