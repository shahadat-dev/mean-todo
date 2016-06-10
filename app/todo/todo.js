'use strict';

var todoApp = angular.module('myApp.todo', ['ngRoute']);

todoApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/todo', {
    templateUrl: 'todo/todo.html',
    controller: 'TodoCtrl'
  });
}]);

