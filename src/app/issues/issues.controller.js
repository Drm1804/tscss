(function () {
  'use strict';

  angular.module('csssrTest')
    .controller('IssuesController', IssuesController);

  /** @ngInject */
  function IssuesController(reposService) {
    var vm = this;
    vm.issuesData = null;


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

    }

  }
})();