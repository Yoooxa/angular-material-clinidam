'use strict';

angular.module('angularMaterialClinidamApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('edas21', {
        url: '/edas21',
        template: '<edas-21></edas-21>'
      });
  });
