(function () {
  'use strict';

  angular.module('csssrTest')
    .directive('issueSearchForm', issueSearchForm);

  /** @ngInject */
  function issueSearchForm() {
    return {
      restrict: 'E',
      scope: {
        getRepoIssues: '=',
        repoData: '='

      },
      controller: 'IssueSearchFormController',
      controllerAs: 'search',
      templateUrl: 'app/issues/search-form/search-form.html'
    }
  }
})();