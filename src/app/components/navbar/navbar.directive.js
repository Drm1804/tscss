(function () {
  'use strict';

  angular.module('csssrTest')
    .directive('navbar', navbar);

  /** @ngInject */
  function navbar() {
    return {
      restrict: 'E',
      scope: {},
      controller: 'NavbarController',
      controllerAs: 'navbar',
      templateUrl: 'app/components/navbar/navbar.html'
    }
  }
})();
