console.log('friends model');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var FriendSchema = new mongoose.Schema({
	first_name: {type: String, required: true},
	last_name: {type: String, required: true},
	birth_date: {type: Date, required: true},
	_user: {type: Schema.Types.ObjectId, ref: 'User'}
});

mongoose.model('Friend', FriendSchema);
