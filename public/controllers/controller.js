var myApp= angular.module('myApp',[]);

myApp.controller('AppCtrl',['$scope','$http',function($scope,$http){
	console.log('name');


	var refresh = function(){


		$http.get("/educationlist").success(function(response){
			$scope.educationlist = response;
			console.log("called refresh");
			console.log(response);
		});

		$http.get("/skilllist").success(function(response){
			$scope.skilllist = response;
			console.log("called refresh");
			console.log(response);
		});

		$http.get("/projectlist").success(function(response){
			$scope.projectlist = response;
			console.log("called refresh");
			console.log(response);
		});
	};

	refresh();

}]);
