'use strict';

(function(){

class Edas21Component {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('angularMaterialClinidamApp')
  .component('edas21', {
    templateUrl: 'app/forms/edas21/edas21.html',
    controller: Edas21Component,
    controllerAs: 'edas21Ctrl'
  });

})();
