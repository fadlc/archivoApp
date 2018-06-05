var express        = require('express');
var bodyParser     = require('body-parser');
var models         = require('./models');
var app            = express();
var path           = require('path');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "html");

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public/views/employee'));

app.get("/", function(req, res){ 
    //res.sendFile(path.join(__dirname + '/index.html'));
    res.sendFile('index.html');
});

app.get('/employee/employees', function(req, res) {					
    models.Employee.find()
        .populate('position')
        .populate('workShift')
        .exec(function(err, employees){
             if(err){ 
                 res.send(err); 
             }
            res.json(employees);
            console.log(employees);
        });
});

app.get('/employee', function(req, res) {
    //res.sendFile(path.join(__dirname + 'new.html'));
    res.sendFile('new.html');
})

app.listen(8080, function() {
	console.log('App listening on port 8080');
});


