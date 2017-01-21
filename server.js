var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("mongoose");
var path = require("path");
var port = 9000;

var app = express ();
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./client/static/views")));
// app.set('views', path.join(__dirname, './client/static/views'));
// app.set('view engine', 'ejs');
// app.engine('html', require('ejs').renderFile);

require('./server/config/mongoose.js');

require('./server/config/routes.js')(app);

app.listen(port, function () {
	console.log("Listening on port", port);
});
