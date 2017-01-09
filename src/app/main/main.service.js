(function () {
  'use strict';

  angular.module('csssrTest')
    .service('reposService', reposService)
    .service('usersService', usersService);

  /** @ngInject */
  function reposService(Restangular) {
    return Restangular.service('repos');
  }

  function usersService(Restangular) {
    return Restangular.service('users');
  }
})();