'use strict';

angular.module('angularMaterialClinidamApp', ['angularMaterialClinidamApp.auth',
    'angularMaterialClinidamApp.admin', 'angularMaterialClinidamApp.constants', 'ngCookies',
    'ngResource', 'ngSanitize', 'btford.socket-io', 'ui.router', 'ui.bootstrap',
    'validation.match', 'ngAnimate', 'ngMaterial'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
