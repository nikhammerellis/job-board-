var mongoose = require('mongoose');
var Job = mongoose.model('Job');
var bodyParser = require('body-parser');

module.exports = (function() {
	return {
		show: function(req, res) {
			Job.find({}, function(err, results){
				if(err) {
					console.log(err);
				} else {
					res.json(results);
				}
			})
		},
		add: function(req, res){
			var new_job = new Job({title: req.body.title, description: req.body.description});
			new_job.save(function(err){
				if(err) {console.log('Something went wrong');}
				else {
					res.json('Success');
				}
			})
		},
		delete: function(req, res){
			Job.remove({_id: req.body.id}, function(err){
				if(err){console.log('Something went wrong')}
				else{
					res.json('Success');
				}
			})
		},
		update: function(req, res){
			console.log(req.body);
			Job.update({_id: req.body._id}, {$set: {title: req.body.new_title, description: req.body.new_description}}, function(err){
				if(err){console.log("something went wrong")}
				else{
					res.json('success');
				}
			})
		}
	}
})();