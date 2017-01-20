'use strict';

(function(){

class Dn4Component extends Card{
    constructor() {
        super();
        this.answers = [
            {label: "Oui", value: 1},
            {label: "Non", value: 0}
        ]
    }
}

angular.module('angularMaterialClinidamApp')
  .component('dn4', {
    templateUrl: 'app/forms/dn4/dn4.html',
    controller: Dn4Component,
    controllerAs: 'dn4Ctrl'
  });

})();
