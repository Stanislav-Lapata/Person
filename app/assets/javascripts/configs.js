angular.module("Angular", ['ngRoute']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/people', {
        templateUrl: 'men.html',
        controller: 'PeopleCtrl'}).
      when('/people/id', {
        templateUrl: 'person.html',
        controller: 'PeopleCtrl'
      }).
      otherwise({
        redirectTo: '/people'
      });
  }]);