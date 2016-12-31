(function(){
  'use strict';

  angular.module('csssrTest')
    .config(config);

  /** @ngInject */
  function config($stateProvider,  $urlRouterProvider){
    $stateProvider
      .state('main', {
        url: '/',
        controller: 'MainController',
        controllerAs: 'main',
        templateUrl: 'app/main/main.html'
      });

    $urlRouterProvider
      .when('', function ($state) {
        $state.go('main.issues');
      })
      .otherwise('issues/');
  }

})();
