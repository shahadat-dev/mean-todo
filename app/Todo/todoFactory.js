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
				});
			},
		add : function(todo,callback){
			TodoService
				.post(todo)
				.$promise
				.then(function(data){
					callback(true, data);
				}, function(err){
					callback(false, err);
				});
		},
		delete : function(id2, callback){
			TodoService
				.delete({id:id2})
				.$promise
				.then(function(res){
					callback(true, res);
				}, function(err){
					callback(false, err);
				});
		}

}

}]);