'use strict';

(function(){

class SimpleSheetComponent {
  constructor() {
    this.cardNumber = 1;
  }
  
  setPreviousCardNumber() {
      this.cardNumber --;
  }

  setNextCardNumber() {
      this.cardNumber ++;
  }
}

angular.module('angularMaterialClinidamApp')
  .component('simpleSheet', {
    templateUrl: 'app/simpleSheet/simpleSheet.html',
    controller: SimpleSheetComponent,
    controllerAs: 'vm'
  });
})();
