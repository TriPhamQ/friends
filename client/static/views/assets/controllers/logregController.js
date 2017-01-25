myApp.controller('logregController', ['$scope', 'usersFactory', '$location', function ($scope, usersFactory, $location) {
    console.log('logregController loaded');
	$scope.error = undefined;
	$scope.regUser = function () {
		if ($scope.newUser.password == $scope.newUser.password_confirm) {
			console.log($scope.newUser);
			usersFactory.register($scope.newUser, function (output) {
				console.log("Output from register:", output.data);
                if (!output.data.error) {
                    console.log("NO ERROR", output.data);
                    usersFactory.login({email: output.data.email, password: output.data.password}, function (data) {
                        if (!output.data.error) {
            			    console.log("SUCCESS, USER IS", output.data.user);
                            $location.url('/'+output.data._id+'/dashboard');
            			}
                        else {
                            console.log("ERROR IS", output.data.error);
                        };
                    })
                };
			});
			$scope.newUser = {};
		}
		else {
			$scope.error = "Password confirmation does not match!"
		};
	};
	$scope.logUser = function () {
		console.log($scope.login);
		usersFactory.login($scope.login, function (output) {
			if (!output.data.error) {
			    console.log("SUCCESS, USER IS", output.data._id);
                $location.url('/'+output.data._id+'/dashboard');
			}
            else {
                console.log("ERROR IS", output.data.error);
            };
		})
		$scope.login = {};
	};
}]);
