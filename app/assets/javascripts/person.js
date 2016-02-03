var app = angular.module('Angular', ['ngResource', 'ngRoute']);

app.factory('Person', ['$resource', function($resource){
  return $resource('/people/:id', {id: '@id'}, {update: {method: 'PATCH'}})
}]);

app.config(['$routeProvider', function($routeProvider) {
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

app.controller('PeopleCtrl', ['$scope', 'Person', '$routeParams', function($scope, Person, $routeParams){
  $scope.people = Person.query()
  console.log($scope.people)
}]);