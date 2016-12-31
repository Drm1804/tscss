(function () {
  'use strict';

  angular.module('csssrTest')
    .controller('IssuesController', IssuesController);

  /** @ngInject */
  function IssuesController(reposService) {
    var vm = this;
    vm.issuesData = null;
    vm.repoName = null;
    vm.userName = null;

    vm.activate = activate;
    vm.getRepoData = getRepoData;
    vm.activate();

    function getRepoData(user, repo) {
      reposService.one(user).one(repo).one('issues').getList()
        .then(function (resp) {
          vm.issuesData = resp.plain();
          console.log(vm.issuesData);
        })
    }

    function activate() {
      vm.getRepoData('angular', 'angular');
    }

  }
})();