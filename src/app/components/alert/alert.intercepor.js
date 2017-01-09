(function(){
  'use strict';

  angular.module('csssrTest')
    .factory('alertIntercepor', alertIntercepor);

  /** @ngInject */
  function alertIntercepor($rootScope, $q){
    return{
      responseError : function (data) {
        $rootScope.$emit('alertShowBanner');
        return $q.reject(data);
      }
    }
  }
})();