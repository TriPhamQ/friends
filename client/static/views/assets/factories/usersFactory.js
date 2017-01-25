console.log('Users Factory');
myApp.factory('usersFactory', ['$http', function ($http) {
	var factory = {};

	factory.register = function (input, callback) {
		console.log("In the reg user factory");
		console.log(input);
		$http.post('/reg', input).then(function (output) {
			console.log("Successfully registered!");
			callback(output);
		});
	};

	factory.login = function (input, callback) {
		$http.post('/log', input).then(function (output) {
			console.log("Successfully logged in!");
			callback(output);
		});
	};
	return factory;
}]);
