//factory
todoApp.factory('TodoFactory', ['TodoService', function(TodoService){
	
	return {
		getAll : function (callback){
		TodoService
			.get({})
			.$promise
			.then(function(data){
				callback(data);
			},function(err){
					callback(err);
			})
	}

}

}]);