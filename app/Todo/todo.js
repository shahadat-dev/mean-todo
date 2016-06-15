'use strict';

todoApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/todo', {
    templateUrl: 'Todo/todo.html',
    controller: 'TodoCtrl'
  });
}]);

todoApp.controller('TodoCtrl', ['$scope', function($scope) {
	console.log(todoApp);
	$scope.todoCtrl = "Hello from todoCtrl";
}]);

