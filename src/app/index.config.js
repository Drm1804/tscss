(function() {
  'use strict';

  angular
    .module('csssrTest')
    .config(config);

  /** @ngInject */
  function config(RestangularProvider, $httpProvider) {
    $httpProvider.interceptors.push('loaderIntercepor');


    RestangularProvider
      .setBaseUrl('https://api.github.com');


  }

})();
