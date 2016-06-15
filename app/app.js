'use strict';

// Declare app level module which depends on views, and components
var todoApp = angular.module('todoApp', [
  'ngRoute',
  'ngResource'
]);

todoApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
