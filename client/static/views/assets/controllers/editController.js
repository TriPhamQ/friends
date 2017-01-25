myApp.controller('editController', ['$scope', '$routeParams', 'friendsFactory', function ($scope, $routeParams, friendsFactory) { //if injected above dont forget to add in as an argument
    $scope.friendid = $routeParams.friendid;
    $scope.userid = $routeParams.userid;
    console.log('editController loaded');
    console.log("$routeParams currently looks like this:", $routeParams.friendid);

    friendsFactory.show($routeParams.friendid, function (data) {
		$scope.friend = data;
		console.log("Friend: ", $scope.friend);
	});

    $scope.edit = function () {
        console.log("Starts the update....");
        console.log($scope.editedFriend);
        friendsFactory.update($scope.editedFriend, $routeParams.friendid);
        friendsFactory.show($routeParams.friendid, function (data) {
    		$scope.friend = data;
    		console.log("Friend: ", $scope.friend);
    	});
        $scope.editedFriend = {};
    }
}]);
