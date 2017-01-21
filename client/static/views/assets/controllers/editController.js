// To hit this controller and partial, try going to 'http://localhost:8000/#/edit/imatest'
// to see $routeParams update with a new _id property
myApp.controller('editController', ['$scope', '$routeParams', function($scope, $routeParams) { //if injected above dont forget to add in as an argument
    $scope.friendid = $routeParams.friendid;
    console.log('editController loaded');
    console.log("$routeParams currently looks like this:", $routeParams);
}]); //end the controller function invocation: ()
