var express        = require('express');
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');


var app            = express();


app.use(express.static(__dirname + '/public'));







app.listen(8080, function() {
	console.log('App listening on port 8080');
});
