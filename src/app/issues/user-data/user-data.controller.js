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
      $scope.$watch(angular.bind(vm, function () {
        vm.data = $scope.userData;
        return vm;
      }))
    }
  }
})();