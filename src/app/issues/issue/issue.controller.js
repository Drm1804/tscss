(function () {
  'use strict';

  angular.module('csssrTest')
    .controller('IssueController', IssueController);

  /** @ngInject */
  function IssueController(reposService, $stateParams, $state) {
    var vm = this;
    vm.issueId = $stateParams.issueId;
    vm.repoName = $stateParams.repoName;
    vm.userName = $stateParams.userName;
    vm.issueData = null;

    vm.activate = activate;
    vm.getIssueData = getIssueData;
    vm.goBack = goBack;
    vm.activate();

    function goBack() {
      $state.go('main.issues', {repoName: vm.repoName, userName: vm.userName})
    }

    function getIssueData() {
      reposService.one(vm.userName).one(vm.repoName).one('issues').one(vm.issueId).get()
        .then(function (resp) {
          vm.issueData = resp.plain();
        });

    }

    function activate() {
      vm.getIssueData();
    }

  }
})();