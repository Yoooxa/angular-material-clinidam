'use strict';

(function(){

class PsqiComponent extends Card{
  constructor() {
    super();

    this.inputsGroup = [
      {label: "Pas au cours du dernier mois", value: 1},
      {label: "Moins d'une fois par semaine", value: 2},
      {label: "1 à 2 fois par semaine", value: 3},
      {label: "3 ou 4 fois par semaine", value: 4}
    ];
  }
}

angular.module('angularMaterialClinidamApp')
  .component('psqi', {
    templateUrl: 'app/forms/psqi/psqi.html',
    controller: PsqiComponent,
    controllerAs: 'psqiCtrl'
  });

})();
