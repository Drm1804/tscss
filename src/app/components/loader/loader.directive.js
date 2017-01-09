(function () {
  'use strict';

  angular.module('csssrTest')
    .directive('loader', loader);

  /** @ngInject */
  function loader() {
    return {
      restrict: 'E',
      scope: {},
      controller: 'LoaderController',
      controllerAs: 'loader',
      templateUrl: 'app/components/loader/loader.html'
    }
  }
})();
