'use strict';

angular.module('angularMaterialClinidamApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('dn4', {
        url: '/dn4',
        template: '<dn-4></dn-4>'
      });
  });
