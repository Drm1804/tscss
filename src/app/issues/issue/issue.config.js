(function(){
  'use strict';

  angular.module('csssrTest')
    .config(config);

  /** @ngInject */
  function config($stateProvider){
    $stateProvider
      .state('main.issue', {
        url: 'issue/{userName}/{repoName}/{issueId}/',
        controller: 'IssueController',
        controllerAs: 'issue',
        templateUrl: 'app/issues/issue/issue.html'
      })
  }
})();