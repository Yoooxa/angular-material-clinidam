'use strict';

(function(){

class ContactComponent {
  constructor() {

  }
}

angular.module('angularMaterialClinidamApp')
  .component('contact', {
    templateUrl: 'app/contact/contact.html',
    controller: ContactComponent,
    controllerAs: 'vm'
  });

})();
