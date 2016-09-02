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

		// View logic
		$scope.viewDetail = false;
		$scope.showAddBox = false;

		$scope.showHideAddBox = function(val){
			$scope.showAddBox = val;
			console.log("clicked "+val);	
		} 
		// End view logic

		// ADD a todo
		$scope.addTodo = function(todo){
			if(typeof todo == 'undefined'){
				console.log("Please fill the form correctly");
				return;
			}
			console.log(todo);
			if(typeof todo._id === 'undefined'){
				// add new todo
				TodoFactory.add(todo, function(status, data){
					if(!status){
						console.log("Something went wrong. Can not add");
						return;
					}
					angular.copy({}, $scope.todo);
					get();
					
				});
			} else{
				// update existing todo
				var newTodo = {};
				newTodo['name'] = todo.name;
				newTodo['description'] = todo.description;
				var updateId = todo._id;

				TodoFactory.update({id: updateId}, newTodo, function(status, data){
					if(!status){
						console.log("Something went wrong. Can not update");
						return;
					}
					angular.copy({}, $scope.todo);
					get();
				});

			}

			
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

		// get todo for edit
		$scope.getTodoForUpdate = function(todo){
			$scope.showAddBox = true;
			$scope.todo = todo;
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

