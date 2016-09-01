'use strict';

//routing
todoApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/todo', {
    templateUrl: 'Todo/todo.html',
    controller: 'TodoCtrl'
  });
}]);

//controller
todoApp.controller('TodoCtrl', ['$scope','TodoFactory', 
	function($scope, TodoFactory){

		// GET all todos
		TodoFactory.getAll(function(data){
			console.log(data);
			$scope.todos = data;
		});
		
}]);

