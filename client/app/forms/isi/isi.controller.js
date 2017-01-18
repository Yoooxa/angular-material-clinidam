'use strict';

(function(){

class IsiComponent extends Card{
  constructor() {
    super();

    this.sleepingDifficulties = [
        {label: "Aucune", value: 0},
        {label: "Légère", value: 1},
        {label: "Moyenne", value: 2},
        {label: "Élevée", value: 3},
        {label: "Extrême", value: 4}
    ];

  }
}

angular.module('angularMaterialClinidamApp')
  .component('isi', {
    templateUrl: 'app/forms/isi/isi.html',
    controller: IsiComponent,
    controllerAs: 'isiCtrl'
  });

})();
