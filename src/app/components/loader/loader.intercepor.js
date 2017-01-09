(function () {
  'use strict';

  angular.module('csssrTest')
    .factory('loaderIntercepor', loaderIntercepor);

  /** @ngInject */
  function loaderIntercepor($rootScope) {
    return {
      request: function (data) {
        $rootScope.$emit('loaderStart');
        return data;
      },
      response: function (data) {
        $rootScope.$emit('loaderFinish');
        return data;
      }
    }
  }
})();