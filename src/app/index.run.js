(function() {
  'use strict';

  angular
    .module('csssrTest')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
