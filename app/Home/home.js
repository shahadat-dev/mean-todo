'use strict';

todoApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'Home/home.html',
    controller: 'HomeCtrl'
  });
}]);

todoApp.controller('HomeCtrl', ['$scope', function($scope) {
	$scope.welcomeMessage = "Welcome to Todo app!";

}]);