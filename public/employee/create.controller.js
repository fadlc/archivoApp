angular.module('archivoApp')
.controller('EmployeeCreateController', function($scope, $http, $location){
    $scope.archivo = "Archivo";
    $scope.employee = {};
    
    $scope.addEmployee =  function() {
        $http.post('/employees',
        {
            code: $scope.employee.code,
            status:$scope.employee.status,
            photo:$scope.employee.photo,
            firstName: $scope.employee.firstName,
            middleName: $scope.employee.middleName,
            lastName: $scope.employee.lastName,
            secondLastName: $scope.employee.secondLastName,
            birthDate: $scope.employee.birthDate,
            idCard: $scope.employee.idCard,
            address: $scope.employee.address,
            phoneNumber: $scope.employee.phoneNumber,
            cellNumber: $scope.employee.cellNumber,
            email: $scope.employee.email,
            grade: $scope.employee.grade,
            career: $scope.employee.career,
            position: $scope.employee.position,
            admissionDate: $scope.employee.admissionDate,
            workShift: $scope.employee.workShift
            
        })
        .then(function(data, status, headers, config) {
            console.log($scope.employee);
            $location.path("employees");
        })
        .catch(function(err){
            console.log(err);
        })
    }
});



