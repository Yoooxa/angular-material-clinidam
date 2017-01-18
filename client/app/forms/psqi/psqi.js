'use strict';

angular.module('angularMaterialClinidamApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('psqi', {
        url: '/psqi',
        template: '<psqi></psqi>'
      });
  });
