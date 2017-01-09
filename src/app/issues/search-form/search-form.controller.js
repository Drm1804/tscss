(function () {
  'use strict';

  angular.module('csssrTest')
    .controller('IssueSearchFormController', IssueSearchFormController);

  /** @ngInject */
  function IssueSearchFormController(usersService, $scope) {
    var vm = this;
    vm.getRepoIssues = $scope.getRepoIssues;
    vm.reposList = null;
    vm.repoData = null;

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
      $scope.$watch(angular.bind(vm, function () {
        vm.repoData = $scope.repoData;
        return vm;
      }))
    }

  }
})();