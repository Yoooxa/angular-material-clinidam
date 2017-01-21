'use strict';

angular.module('angularMaterialClinidamApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('simple-sheet', {
        url: '/simple-sheet',
        template: '<simple-sheet></simple-sheet>'
      });
  });
