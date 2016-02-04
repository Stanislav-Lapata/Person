angular.module("Angular", ['ngResource', 'ngRoute', 'AngularFilters']);
angular.module('Angular').config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/people', {
        templateUrl: 'men.html',
        controller: 'PeopleCtrl'}).
      when('/people/:id', {
        templateUrl: 'person.html',
        controller: 'PersonCtrl'
      }).
      otherwise({
        redirectTo: '/people'
      });
  }]);
