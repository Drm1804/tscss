(function () {
  'use strict';

  angular.module('csssrTest')
    .controller('NavbarController', NavbarController);

  /** @ngInject */
  function NavbarController() {
    var vm = this;

    vm.activate = activate;
    vm.activate();

    function activate() {

    }

  }
})();