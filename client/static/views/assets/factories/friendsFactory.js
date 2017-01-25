console.log('Friends Factory');
myApp.factory('friendsFactory', ['$http', function ($http) {
    // constructor for our factory
    var friends = [];
    var friend = {};

    function FriendsFactory() {
        var _this = this;

        this.create = function (newfriend, callback) {
			console.log("New friend passed in factory is:", newfriend);
            $http.post('/friends', newfriend).then(function (returned_data) {
                console.log("returned", returned_data.data);
                if (typeof(callback) == 'function') {
                    callback(returned_data.data);
                }
            });
        };

        this.update = function (editedFriend, id) {
            $http.put('/friends/'+id, editedFriend).then(function () {

            })
        };

        this.index = function (userid, callback) {
            $http.get('/friends/'+userid).then(function (returned_data) {
                friends = returned_data.data;
                callback(friends);
            });
        };

        this.delete = function (id) {
            $http.delete('/friends/'+id).then(function () {

            })
        };

        this.show = function (id, callback) {
            console.log("Below is Params");
            console.log(id);
            // console.log(id.friendid);
            $http.get('/friends/show/'+id).then(function (returned_data) {
                friend = returned_data.data;
                console.log("FRIEND SELECTED",friend);
                callback(friend);
            });
        };

        this.getFriends = function (callback) {
            callback(friends);
        };

        this.getFriend = function (callback) {
            callback(friend);
        };
    };
    console.log(new FriendsFactory());
    return new FriendsFactory();
}]);
