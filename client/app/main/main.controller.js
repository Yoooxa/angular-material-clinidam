'use strict';

(function() {

  class MainController {

      constructor(Menu, Auth) {
          this.menu = Menu.get('Main');
          this.isLoggedIn = Auth.isLoggedIn;
          this.isAdmin = Auth.isAdmin;
      };
  }

  angular.module('angularMaterialClinidamApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController,
      controllerAs: 'vm'
    });
})();
