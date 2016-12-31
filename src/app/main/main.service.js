(function () {
  'use strict';

  angular.module('csssrTest')
    .service('reposService', reposService);

  /** @ngInject */
  function reposService(Restangular) {
    return Restangular.service('repos');
  }
})();