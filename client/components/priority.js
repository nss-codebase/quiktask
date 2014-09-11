(function(){
  'use strict';

  angular.module('quiktask')
  .factory('Priority', ['$http', function($http){

    function create(priority){
      return $http.post('/priorities', priority);
    }

    return {create:create};
  }]);
})();

