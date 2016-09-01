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
				angular.copy({}, $scope.todo);
				get();
				
			})
		}	

		// VIEW detail of a todo
		$scope.view = function(todo){
			$scope.viewDetail = true;
			$scope.todoDetail = todo;
		}

		//DELETE a todo
		$scope.delete = function(todo){
			TodoFactory.delete(todo._id, function(status, res){
				if(!status){
					console.log("Something went wrong. Can not delete");
				}
				console.log(res);
				get();
			})
		}

		// GET all todos
		var get = function(){
			TodoFactory.getAll(function(data){
				//console.log(data);
				$scope.todos = data;
			});		
		}

		get();


}]);

