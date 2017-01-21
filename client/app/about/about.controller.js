'use strict';

(function(){

class AboutComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('angularMaterialClinidamApp')
  .component('about', {
    templateUrl: 'app/about/about.html',
    controller: AboutComponent,
    controllerAs: 'aboutCtrl'
  });

})();
