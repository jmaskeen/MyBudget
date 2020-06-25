var app = angular.module('BudgetApp',[
    'ngRoute',
    'BudgetApp.controller'
])

.config(['$routeProvider',function($routeProvider) {
    $routeProvider.when('/Main', {
      templateUrl: 'MainCTRL'
    })
}])
    
.config(['$routeProvider',function($routeProvider) {
    $routeProvider.when('/Login', {
      templateUrl: 'html/login.html',
      controller: 'LogInCTRL'
    })
}])

.config(['$routeProvider',function($routeProvider) {
    $routeProvider.when('/Signup', {
      templateUrl: 'html/signup.html',
      controller: 'SignUpCTRL'
    })
}])

.config(['$routeProvider',function($routeProvider){
    $routeProvider.otherwise({redirectTo: '/Login'});
}])