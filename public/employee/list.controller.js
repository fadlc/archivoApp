angular.module('archivoApp')
.controller('EmployeeListController', function($scope, $http){
    $http.get('/employee/employees')
    .then(function(response) {
        return response.data;  
    })
    .then(function(employees) {
        $scope.employees = employees;
    })
    .catch(function(err) {
        console.log(err);
    });
});
