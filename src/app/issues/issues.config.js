(function(){
  'use strict';

  angular.module('csssrTest')
    .config(config);

  /** @ngInject */
  function config($stateProvider){
    $stateProvider
      .state('main.issues', {
        url: 'issues/?userName&repoName',
        controller: 'IssuesController',
        controllerAs: 'issues',
        templateUrl: 'app/issues/issues.html'
      })
  }
})();