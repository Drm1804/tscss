(function () {
  'use strict';

  angular.module('csssrTest')
    .filter('issueInfoState', issueInfoState);

  /** @ngInject */
  function issueInfoState() {
    return function (input) {
      var data = '';

      switch (input) {
        case 'open':
          data = 'Открыт';
          break;
        case 'close':
          data = 'Закрыт';
          break;
      }

      return data;
    }
  }
})();