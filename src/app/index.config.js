(function() {
  'use strict';

  angular
    .module('csssrTest')
    .config(config);

  /** @ngInject */
  function config(RestangularProvider) {

    RestangularProvider
      .setBaseUrl('https://api.github.com');


  }

})();
