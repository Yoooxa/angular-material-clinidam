'use strict';

angular.module('angularMaterialClinidamApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('isi', {
        url: '/isi',
        template: '<isi></isi>'
      });
  });
