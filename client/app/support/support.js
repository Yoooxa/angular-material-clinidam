'use strict';

angular.module('angularMaterialClinidamApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('support', {
        url: '/support',
        template: '<support></support>'
      });
  });
