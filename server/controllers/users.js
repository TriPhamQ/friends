console.log('users controller');

var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function () {
	return {
		register: function (req, res) {
			console.log("In the register");
			console.log(req.body);
			User.findOne({email: req.body.email}, function (err, result) {
				if (err) {
					console.log("Error when checking email in db...");
				}
				else if (result) {
					console.log("Email is already registered...");
					res.json({error: "Email is already registered, try login or type new email"})
				}
				else {
					console.log("No user found. Start to creating...");
					User.create(req.body, function (err, results) {
						if (err) {
							console.log(err);
						}
						else {
							console.log("New user created");
							res.json(results);
						};
					});
				}
			});
		},
		login: function (req, res) {
			console.log("In the login");
			console.log(req.body);
			User.findOne({email: req.body.email}, function (err, result) {
				if (err) {
					console.log("Error when checking email in db...");
				}
				else if (!result) {
					console.log("Email is not registered...");
					res.json({error: "Email is not registered, try register"})
				}
				else {
					console.log("User found. Start to check password");
					if (result.password == req.body.password) {
						console.log("Successfully logged in");
						// User.find({_id: req.params.userid}).populate('friends').exec(function (err, data) {
						// 	if (err) {
						// 		console.log("Messed up something");
						// 	}
						// 	else {
						// 		console.log(data);
						// 	}
						// })
						res.json({user: result.name, email: result.email, _id: result._id});
					}
					else {
						console.log("Wrong password...");
						res.json({error: "Wrong password, try again"});
					}
				};
			});
		}
	}
})();
