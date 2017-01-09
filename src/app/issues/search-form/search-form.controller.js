(function () {
  'use strict';

  angular.module('csssrTest')
    .controller('IssueSearchFormController', IssueSearchFormController);

  /** @ngInject */
  function IssueSearchFormController(usersService, $scope) {
    var vm = this;
    vm.repoName = null;
    vm.reposList = null;
    vm.userName = null;
    vm.getRepoIssues = $scope.getRepoIssues;

    vm.activate = activate;
    vm.getUserRepos = getUserRepos;
    vm.activate();

    function getUserRepos(user) {
      usersService.one(user).one('repos').getList()
        .then(function (resp) {
          vm.reposList = resp.plain();
        });
    }

    function activate() {
      vm.getRepoIssues = $scope.getRepoIssues;
    }

  }
})();