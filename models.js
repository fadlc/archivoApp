var mongoose       = require('mongoose');

var employeeSchema = {
    code: Number,
    status: Boolean,
    photo: String,
    firstName: String,
    middleName: String,
    lastName: String,
    secondlastName: String,
    birthDate: Date,
    identificationCard: Number,
    address: String,
    phoneNumber: Number,
    cellNumber: Number,
    gradeCode: Number,
    career: String,
    position: { type: mongoose.Schema.Types.ObjectId, ref: "Position" },
    admissionDate: Date,
    workShift: { type: mongoose.Schema.Types.ObjectId, ref: "WorkShift" }
};

var positionSchema = {
    code: Number,
    description: String
};

var workShiftSchema = {
    code: Number,
    description: String
};

mongoose.connect("mongodb://localhost/archivoDB");

module.exports = {
    Employee: mongoose.model("Employee", employeeSchema),
    Position: mongoose.model("Position", positionSchema),
    WorkShift: mongoose.model("WorkShift", workShiftSchema)
};