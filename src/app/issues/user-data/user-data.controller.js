(function () {
  'use strict';

  angular.module('csssrTest')
    .controller('IssueUserDataController', IssueUserDataController);

  /** @ngInject */
  function IssueUserDataController($scope) {
    var vm = this;
    vm.data = null;

    vm.activate = activate;
    vm.activate();

    function activate() {
      vm.data = $scope.userData;
    }

  }
})();