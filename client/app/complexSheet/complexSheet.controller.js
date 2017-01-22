'use strict';

(function(){

class ComplexSheetComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('angularMaterialClinidamApp')
  .component('complexSheet', {
    templateUrl: 'app/complexSheet/complexSheet.html',
    controller: ComplexSheetComponent,
    controllerAs: 'complexSheetCtrl'
  });

})();
