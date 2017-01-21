'use strict';

(function(){

class IsiComponent{
  constructor() {
    this.sleepingDifficulties = [
        {label: "Aucune", value: 0},
        {label: "Légère", value: 1},
        {label: "Moyenne", value: 2},
        {label: "Élevée", value: 3},
        {label: "Extrême", value: 4}
    ];
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
  .component('isi', {
    templateUrl: 'app/forms/isi/isi.html',
    controller: IsiComponent,
    controllerAs: 'isiCtrl'
  });

})();
