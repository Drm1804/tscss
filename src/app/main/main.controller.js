(function() {
  'use strict';

  angular
    .module('csssrTest')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($state) {
    var vm = this;
    vm.activate = activate;

    vm.activate();


    function activate() {
      if($state.is('main')){
        $state.go('main.issues');
      }
    }
  }
})();
