'use strict';

angular.module('angularMaterialClinidamApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('contact', {
        url: '/contact',
        template: '<contact></contact>'
      });
  });
