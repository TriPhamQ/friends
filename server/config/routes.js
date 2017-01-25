console.log("Routes...");
var friends = require('../controllers/friends.js');
var users = require('../controllers/users.js');

module.exports = function(app){
	app.get('/friends/:userid', friends.index);
	app.get('/friends/show/:id', friends.show);
	app.post('/friends', friends.create);
	app.put('/friends/:id', friends.update);
	app.delete('/friends/:id', friends.delete);
	app.post('/reg', function (req, res) {
		users.register(req, res);
	});
	app.post('/log', function (req, res) {
		users.login(req, res);
	});
};
