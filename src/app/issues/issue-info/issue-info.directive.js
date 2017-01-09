(function () {
  'use strict';

  angular.module('csssrTest')
    .directive('issueInfo', issueInfo);

  /** @ngInject */
  function issueInfo() {
    return {
      restrict: 'E',
      scope: {
        issueData: '='
      },
      controller: 'IssueInfoController',
      controllerAs: 'info',
      templateUrl: 'app/issues/issue-info/issue-info.html'
    }
  }
})();