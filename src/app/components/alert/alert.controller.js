(function () {
  'use strict';

  angular.module('csssrTest')
    .controller('AlertController', AlertController);

  /** @ngInject */
  function AlertController() {
    var vm = this;

    vm.activate = activate;
    vm.activate();

    function activate() {

    }

  }
})();