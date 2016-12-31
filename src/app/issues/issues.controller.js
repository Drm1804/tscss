(function () {
  'use strict';

  angular.module('panel')
    .controller('IssuesController', IssuesController);

  /** @ngInject */
  function IssuesController() {
    var vm = this;

    vm.activate = activate;
    vm.activate();

    function activate() {

    }

  }
})();