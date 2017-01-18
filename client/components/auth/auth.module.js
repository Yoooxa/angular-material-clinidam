'use strict';

angular.module('angularMaterialClinidamApp.auth', ['angularMaterialClinidamApp.constants',
    'angularMaterialClinidamApp.util', 'ngCookies', 'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
