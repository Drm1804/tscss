(function () {
  'use strict';

  angular.module('csssrTest')
    .controller('IssuesController', IssuesController);

  /** @ngInject */
  function IssuesController(reposService, $stateParams) {
    var vm = this;
    vm.issuesData = null;
    vm.repoData = {
      user: $stateParams.userName,
      repo: {
        name: $stateParams.repoName
      }
    };

    vm.activate = activate;
    vm.getRepoIssues = getRepoIssues;
    vm.activate();


    function getRepoIssues(user, repo) {
      reposService.one(user).one(repo).one('issues').getList()
        .then(function (resp) {
          vm.issuesData = resp.plain();
        });

    }

    function activate() {
      if($stateParams.userName !== undefined && $stateParams.repoName !== undefined ){
        vm.getRepoIssues($stateParams.userName, $stateParams.repoName);
      }
    }

  }
})();