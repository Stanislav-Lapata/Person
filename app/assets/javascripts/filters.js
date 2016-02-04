angular.module('AngularFilters', []).filter('checkPerson', function() {
  return function(person) {
    var people = [];
    person.forEach(function(item) {
      item.true = '\u2713'
      item.false = '\u2718'
      people.push(item)
    });
    return people
  };
}).
  filter('checkBoolean', function() {
    return function(boolean) {
      return boolean ? '\u2713' : '\u2718'
    }
  })

