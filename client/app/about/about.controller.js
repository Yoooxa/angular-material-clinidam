'use strict';

(function(){

class AboutComponent {
  constructor() {
    
  }
}

angular.module('angularMaterialClinidamApp')
  .component('about', {
    templateUrl: 'app/about/about.html',
    controller: AboutComponent,
    controllerAs: 'vm'
  });

})();
