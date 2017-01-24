myApp.controller('showController', ['$scope', 'friendsFactory', '$routeParams', function($scope, friendsFactory, $routeParams) {
    console.log('showController loaded');
    var self = this;
    var index = function () {
        friendsFactory.index(function(returnedData){
            $scope.friends = returnedData;
        });
    };

	index();

	friendsFactory.show($routeParams.friendid, function (data) {
		$scope.friend = data;
		console.log("Friend: ", $scope.friend);
	});
	console.log("End looking for Friend Info");

    $scope.delete = function (friendid) {
        friendsFactory.delete(friendid);
        index();
    }
}]);
