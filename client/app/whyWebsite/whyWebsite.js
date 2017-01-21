'use strict';

angular.module('angularMaterialClinidamApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('whyWebsite', {
        url: '/why-website',
        template: '<why-website></why-website>'
      });
  });
