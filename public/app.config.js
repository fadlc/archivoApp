angular.
  module('archivoApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/employees', {
          templateUrl: 'employee/index.html',
        }).
        when('/employees/create', {
          templateUrl: 'employee/create.html'
        }).
        otherwise('/employees');
    }
  ]);