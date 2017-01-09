(function () {
  'use strict';

  angular.module('csssrTest')
    .controller('IssueInfoController', IssueInfoController);

  /** @ngInject */
  function IssueInfoController($scope) {
    var vm = this;
    vm.data = null;

    vm.activate = activate;
    vm.activate();

    function activate() {
      vm.data = $scope.issueData;
    }

  }
})();