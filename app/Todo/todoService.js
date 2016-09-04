//service
todoApp.service('TodoService', ['$resource', function($resource){
	//var url = 'http://localhost:3001';
	var url = 'https://todo-be.herokuapp.com';
	return $resource(url+'/todo/:id', { id : '@id'}, {
		get:{
			method: 'GET',
			isArray: true
		},
		post:{
			method: 'POST'
		},
		delete:{
			method: 'DELETE'
		},
		update: {
			method: 'PUT'
		}
	});
}]);



