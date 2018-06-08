var express        = require('express');
var bodyParser     = require('body-parser');
var models         = require('./models');
var app            = express();
//var path           = require('path');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));

/*app.get("/", function(req, res){ 
    res.sendFile('index.html');
});*/

app.get('/employees', function(req, res) {					
    models.Employee.find()
        .populate('position')
        .populate('workShift')
        .exec(function(err, employees){
             if(err){ 
                 res.send(err); 
             }
            res.json(employees);
        });
});

app.post('/employees', function(req, res) {
    var data = {
        code: req.body.code,
        status:req.body.status,
        photo:req.body.photo,
        firstName: req.body.firstName,
        middleName: req.body.middleName,
        lastName: req.body.lastName,
        secondLastName: req.body.secondLastName,
        birthDate: req.body.birthDate,
        idCard: req.body.idCard,
        address: req.body.address,
        phoneNumber: req.body.phoneNumber,
        cellNumber: req.body.cellNumber,
        email: req.body.email,
        grade: req.body.grade,
        //position: req.body.position,
        admissionDate: req.body.admissionDate,
        //workShift: req.body.workShift
    }
    var employee = new models.Employee(data);
    
    employee.save(function (err) {
        console.log(err);
        console.log(employee);
        res.sendStatus(200);
        
    });
})

app.listen(8080, function() {
	console.log('App listening on port 8080');
});


