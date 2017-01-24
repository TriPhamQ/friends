myApp.controller('newController', ['$scope', 'friendsFactory', function($scope, friendsFactory) {
    console.log('newController loaded');
    var self = this;

    var index = function () {
        friendsFactory.index(function(returnedData){
            $scope.friends = returnedData;
            console.log($scope.friends);
        });
    };

    index();

    $scope.newFriend = {};

    $scope.create = function() {
        console.log('Create Friend clicked!');
        console.log($scope.newFriend);
        if (!$scope.newFriend.first_name || !$scope.newFriend.last_name || !$scope.newFriend.birth_date) {
            console.log('required fields not present');
            return;
        }
        console.log('All required fields present, and the $scope.newFriend on the controller (which is also NC.newFriend on the partial) looks like this:');
        console.log($scope.newFriend);
        friendsFactory.create($scope.newFriend, function (returnedData) {
            index();
            $scope.newFriend = {};
        });
    };
}]);
