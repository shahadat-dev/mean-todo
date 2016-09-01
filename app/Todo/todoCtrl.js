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

		$scope.viewDetail = false;

		// GET all todos
		TodoFactory.getAll(function(data){
			console.log(data);
			$scope.todos = data;
		});		

		// ADD a todo
		$scope.addTodo = function(todo){
			if(typeof todo == 'undefined'){
				console.log("Please fill the form correctly");
				return;
			}

			TodoFactory.add(todo, function(status, data){
				if(!status){
					console.log("Something went wrong. Can not add");
					return;
				}
				console.log(data);
				angular.copy({}, $scope.todo);
			})
		}	

		// VIEW detail of a todo
		$scope.view = function(todo){
			$scope.viewDetail = true;
			$scope.todoDetail = todo;
		}


}]);

