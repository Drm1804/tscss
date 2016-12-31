(function() {
  'use strict';

  angular
    .module('csssrTest')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;
    vm.activate = activate;

    vm.activate();


    function activate() {
    }
  }
})();
