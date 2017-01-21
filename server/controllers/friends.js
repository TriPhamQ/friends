console.log('friends controller');

var mongoose = require('mongoose')
var Friend = mongoose.model('Friend');

function FriendsController(){
	this.index = function(req, res){
		Friend.find({}, function (err, results) {
			console.log("Got back Friend DB");
			res.json(results);
		});
	};
	this.create = function(req, res){
		Friend.create(req.body, function (err, results) {
			if (err) {
				console.log(err);
			}
			else {
				console.log("New friend created");
				res.json(results);
			};
		});
	};
	this.update = function(req, res){
		Friend.findOne({_id: req.params.id}, function (err, friend) {
			if (err) {
				console.log(err);
			}
			else {
				friend.first_name = req.body.first_name;
				friend.last_name = req.body.last_name;
				friend.save(function (err, updatedFriend) {
					if (err) {
						console.log("Update friend gave this error:",err);
					}
					else {
						console.log("Successfully updated friend");
						res.json(updatedFriend);
					};
				});
			};
		});
	};
	this.delete = function(req, res){
		Friend.remove({_id: req.params.id}, function (err) {
			if (err) {
				console.log("Delete friend gave this error", err);
			}
			else {
				console.log("Successfully deleted friend");
			};
		});
	};
	this.show = function(req, res){
		Friend.findOne({_id: req.params.id}, function (err, friend) {
			if (err) {
				console.log("Error finding friend:", err);
			}
			else {
				console.log("Successfully located friend");
				res.json(friend)
			};
		});
	};
};

module.exports = new FriendsController();
