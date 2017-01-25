myApp.controller('showController', ['$scope', 'friendsFactory', '$routeParams', '$location', function ($scope, friendsFactory, $routeParams, $location) {
    console.log('showController loaded');
    console.log($routeParams.userid);
    $scope.userid = $routeParams.userid;
    var self = this;
    var index = function () {
        friendsFactory.index($routeParams.userid, function(returnedData){
            $scope.friends = returnedData;
        });
    };

	index();
    if ($routeParams.friendid) {
        friendsFactory.show($routeParams.friendid, function (data) {
    		$scope.friend = data;
    		console.log("Friend: ", $scope.friend);
    	});
    };

    $scope.delete = function (friendid) {
        friendsFactory.delete(friendid);
        index();
    };

    $scope.logout = function () {
        $scope.userid = undefined;
        $scope.friendid = undefined;
        $location.url('/');
    }
}]);
