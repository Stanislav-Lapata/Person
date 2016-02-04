angular.module('Angular').controller('PeopleCtrl', ['$scope', 'Person', '$routeParams', function($scope, Person, $routeParams){
    $scope.people = Person.query()
  }]).
  controller('PersonCtrl', ['$scope', 'Person', '$routeParams',
    function($scope, Person, $routeParams){
      var id = $routeParams.id
      $scope.person = Person.get({id: id})
  }]);
