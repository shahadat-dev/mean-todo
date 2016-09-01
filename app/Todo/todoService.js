//service
todoApp.service('TodoService', ['$resource', function($resource){
	return $resource('http://localhost:3001/todo/:id', { id : '@id'}, {
		get:{
			method: 'GET',
			isArray: true
		},
		post:{
			method: 'POST'
		},
		delete:{
			method: 'DELETE'
		}
	});
}]);



