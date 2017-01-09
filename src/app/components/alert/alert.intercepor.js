(function(){
  'use strict';

  angular.module('csssrTest')
    .factory('alertIntercepor', alertIntercepor);

  /** @ngInject */
  function alertIntercepor(){
    return{
      responseError : function (rejection) {

        return $q.reject(rejection);

      }


    }
  }
})();