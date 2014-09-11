(function(){
  'use strict';

  angular.module('quiktask')
  .controller('PrioritiesCtrl', ['$scope', 'Priority', function($scope, Priority){
    $scope.priority = {};

    $scope.add = function(){
      Priority.create($scope.priority).then(function(response){
        debugger;
        $scope.priority = {};
      });
    };
  }]);
})();

