(function () {
  'use strict';

  angular.module('csssrTest')
    .controller('LoaderController', LoaderController);

  /** @ngInject */
  function LoaderController($rootScope) {
    var vm = this;
    vm.loaderCount = 0;

    vm.activate = activate;
    vm.activate();

    function activate() {
      $rootScope.$on('loaderStart', function () {
        vm.loaderCount += 1;
      });
      $rootScope.$on('loaderFinish', function () {
        if(vm.loaderCount != 0){
          vm.loaderCount -= 1;
        }

      })
    }

  }
})();