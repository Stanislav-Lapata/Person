angular.module("Angular", ['ngResource', 'ngRoute']).
  factory('Person', ['$resource', function($resource){
    return $resource('/people/:id', {id: '@id'}, {update: {method: 'PATCH'}});
  }]);


