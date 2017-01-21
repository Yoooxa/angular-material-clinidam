'use strict';

angular.module('angularMaterialClinidamApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('why-website', {
        url: '/why-website',
        template: '<why-website></why-website>'
      });
  });
