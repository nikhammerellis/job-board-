job_board.controller('JobsController', function($scope, JobFactory){
			JobFactory.getJobs(function(data){
				$scope.jobs = data;
			});
			$scope.addJob = function() {
				JobFactory.addJob($scope.new_job, function(){
					JobFactory.getJobs(function(data){
						$scope.jobs = data;
					});
					$scope.new_job = {};
				})
			}
			$scope.deleteJob = function(job) {
				JobFactory.deleteJob(job._id, function(){
					JobFactory.getJobs(function(data){
						$scope.jobs = data;
					});
				})
			}
			$scope.updateJob = function(job) {
				JobFactory.updateJob(job, function(){
					JobFactory.getJobs(function(data){
						$scope.jobs = data;
					})
				})
			}
		});