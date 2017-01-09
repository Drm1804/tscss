(function () {
  'use strict';

  angular.module('csssrTest')
    .controller('AlertController', AlertController);

  /** @ngInject */
  function AlertController($rootScope) {
    var vm = this;
    vm.showBanner = false;

    vm.activate = activate;
    vm.activate();

    function activate() {
      $rootScope.$on('alertShowBanner', function () {
        vm.showBanner = true;
      });

      $rootScope.$on('alertHideBanner', function () {
        vm.showBanner = false;
      })
    }

  }
})();