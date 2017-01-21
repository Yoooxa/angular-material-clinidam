'use strict';

(function(){

class SimpleSheetComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('angularMaterialClinidamApp')
  .component('simpleSheet', {
    templateUrl: 'app/simpleSheet/simpleSheet.html',
    controller: SimpleSheetComponent,
    controllerAs: 'vm'
  });

})();
