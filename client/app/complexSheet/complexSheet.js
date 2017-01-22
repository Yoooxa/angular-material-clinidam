'use strict';

angular.module('angularMaterialClinidamApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('complex-sheet', {
        url: '/complex-sheet',
        template: '<complex-sheet></complex-sheet>'
      });
  });
