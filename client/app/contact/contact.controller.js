'use strict';

(function(){

class ContactComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('angularMaterialClinidamApp')
  .component('contact', {
    templateUrl: 'app/contact/contact.html',
    controller: ContactComponent,
    controllerAs: 'contactCtrl'
  });

})();
