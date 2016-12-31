(function () {
  'use strict';

  angular.module('csssrTest')
    .directive('alert', alert);

  /** @ngInject */
  function alert() {
    return {
      restrict: 'E',
      scope: {},
      controller: 'AlertController',
      controllerAs: 'alert',
      templateUrl: 'app/components/alert/alert.html'
    }
  }
})();