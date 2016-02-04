'use strict';
angular.module('Angular').factory('Person', ['$resource', function($resource){
    return $resource('/people/:id', {id: '@id'}, {update: {method: 'PATCH'}});
  }]);

// angular.module('AngularFilters', []).filter('checkPerson', function() {
//   return function(person) {
//     var people = [];
//     person.forEach(function(item) {
//       item.true = '\u2713'
//       item.false = '\u2718'
//       people.push(item)
//     });
//     return people
//   };
// });
