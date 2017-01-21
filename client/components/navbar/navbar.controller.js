'use strict';

class NavbarController {

  isCollapsed = true;
  //end-non-standard

  constructor(Auth, Menu) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
    this.menu = Menu.get('Main');
  }

}

angular.module('angularMaterialClinidamApp')
  .controller('NavbarController', NavbarController);
