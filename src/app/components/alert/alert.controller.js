(function () {
  'use strict';

  angular.module('csssrTest')
    .controller('AlertController', AlertController);

  /** @ngInject */
  function AlertController($rootScope, $scope) {
    var vm = this;
    vm.showBanner = false;

    vm.activate = activate;
    vm.activate();

    function activate() {
      $scope.$on('$destroy', $rootScope.$on('alertShowBanner', function () {
          vm.showBanner = true;
        }));

      $scope.$on('$destroy', $rootScope.$on('alertHideBanner', function () {
        vm.showBanner = false;
      }));
    }

  }
})();