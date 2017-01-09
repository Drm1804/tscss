(function () {
  'use strict';

  angular.module('csssrTest')
    .directive('issueUserData', issueUserData);

  /** @ngInject */
  function issueUserData() {
    return {
      restrict: 'E',
      scope: {
        userData: '='
      },
      controller: 'IssueUserDataController',
      controllerAs: 'user',
      templateUrl: 'app/issues/user-data/user-data.html'
    }
  }
})();