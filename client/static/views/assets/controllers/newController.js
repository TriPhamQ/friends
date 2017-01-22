myApp.controller('newController', ['$scope', 'friendsFactory', function($scope, friendsFactory) {
    //when your index.html page loads, you should see this line. Otherwise
    //make sure your controller syntax is correct
    //and that you have included the controller script file
    console.log('newController loaded');
    var self = this;
    var index = function () {
        friendsFactory.index(function(returnedData){
            $scope.friends = returnedData;
            console.log($scope.friends);
        });
    };
    index();
    // This line is optional, because angular will be smart enough
    // to know you have a NC.newFriend object from your ng-model.
    $scope.newFriend = {};
    // Using the ng-model on the view, angular will determine that
    // two properties will need to be added to this object: name and favoriteLanguage

    // Define a create function so that if someone clicks on
    // an element with ng-click="NC.create()"
    // it triggers the function and runs the code inside
    $scope.create = function() {
        console.log('Create Friend clicked!');
        //if the required fields are not submitted, then don't proceed
        if (!$scope.newFriend.first_name || !$scope.newFriend.last_name) {
            console.log('required fields not present');
            return;
        }
        console.log('All required fields present, and the $scope.newFriend on the controller (which is also NC.newFriend on the partial) looks like this:');
        console.log($scope.newFriend);
        friendsFactory.create($scope.newFriend, function (returnedData) {
            index();
        });
    };
}]); //end the controller function invocation: ()
