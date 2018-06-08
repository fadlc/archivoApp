var mongoose       = require('mongoose');

var employeeSchema = {
    code: Number,
    status: Boolean,
    photo: String,
    firstName: String,
    middleName: String,
    lastName: String,
    secondLastName: String,
    birthDate: Date,
    idCard: String,
    address: String,
    phoneNumber: String,
    cellNumber: String,
    email: String,
    grade: String,
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