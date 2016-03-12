job_board.factory('JobFactory', function($http){
			var factory = {};
			var jobs = [];

			factory.getJobs = function(callback){
				$http.get('/jobs').success(function(output){
					jobs = output;
					callback(jobs);
				})
			}
			
			factory.addJob = function(info, callback){
				$http.post('/add_job', info).success(function(output){
					console.log(info);
					callback();
				})
			}

			factory.deleteJob = function(id, callback){
				$http.post('/delete_job', {id: id}).success(function(output){
					console.log(id);
					callback();
				})
			}

			factory.updateJob = function(job, callback){
				$http.post('/update_job', job).success(function(){
					callback();
				})
			}
			return factory;
		});