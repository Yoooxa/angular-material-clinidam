'use strict';

(function() {

  class MainController {

      constructor(Menu) {
          this.menu = Menu.get('Main');

      }
  }

  angular.module('angularMaterialClinidamApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController,
      controllerAs: 'MainController'
    });
})();
