(function(){
  'use strict';

  angular.module('panel')
    .config(config);

  /** @ngInject */
  function config($stateProvider){
    $stateProvider
      .state('main.issues', {
        url: 'issues/',
        controller: 'IssuesController',
        controllerAs: 'issues',
        templateUrl: 'app/issues/issues.html'
      })
  }
})();