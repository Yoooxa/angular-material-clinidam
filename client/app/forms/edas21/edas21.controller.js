'use strict';

(function(){

class Edas21Component extends Card{
  constructor() {
    super();
    this.inputsGroup = [
      {label: "Pas du tout", value: 1},
      {label: "Peu", value: 2},
      {label: "Beaucoup", value: 3},
      {label: "Totalement", value: 4},
    ]
  }
}

angular.module('angularMaterialClinidamApp')
  .component('edas21', {
    templateUrl: 'app/forms/edas21/edas21.html',
    controller: Edas21Component,
    controllerAs: 'edas21Ctrl'
  });

})();
