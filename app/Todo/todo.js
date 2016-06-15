'use strict';

todoApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/todo', {
    templateUrl: 'Todo/todo.html',
    controller: 'TodoCtrl'
  });
}]);

//factory
todoApp.factory('TodoFactory', ['$resource', function($resource){
	return $resource('http://localhost:3001/todo', {}, {
		get:{
			method: 'GET',
			isArray: true
		}
	});
}]);

todoApp.controller('TodoCtrl', ['$scope','TodoFactory','$http', 
	function($scope, TodoFactory, $http) {
		console.log(todoApp);
		$scope.todoCtrl = "Hello from todoCtrl";

		// using resource
		TodoFactory.get({}).$promise.then(function(data){
			console.log(data);
		});

		// using $http
		/*$http.get('http://localhost:3001/todo').then(function(data){
			console.log(data);
		});*/

		


}]);



