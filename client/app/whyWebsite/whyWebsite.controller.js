'use strict';

(function(){

class WhyWebsiteComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('angularMaterialClinidamApp')
  .component('whyWebsite', {
    templateUrl: 'app/whyWebsite/whyWebsite.html',
    controller: WhyWebsiteComponent,
    controllerAs: 'whyWebsiteCtrl'
  });

})();
