var mongoose = require('mongoose');

var JobSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	}
});

mongoose.model('Job', JobSchema);
