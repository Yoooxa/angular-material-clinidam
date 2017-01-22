'use strict';

(function(){

class SupportComponent {
  constructor($http, Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.http = $http;
  }

  sendMailToSupport(form) {

    var $http = this.http;

    var data = ({
      subject : this.subject,
      message : this.message
    });

    var config = {};

    $http.post('/api/contact/support', data, config)
      .then(
        function(response){
          // success
        },
        function(error){
          // failure callback
          console.error(error);
        }
      );

  }
}

angular.module('angularMaterialClinidamApp')
  .component('support', {
    templateUrl: 'app/support/support.html',
    controller: SupportComponent,
    controllerAs: 'vm'
  });

})();
