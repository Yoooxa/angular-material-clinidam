'use strict';

(function(){

class ContactComponent {
  constructor($http) {
    this.submitted = false;
    this.http = $http;
  }

  sendMail(form) {
    this.submitted = true;
    var $http = this.http;

    var data = ({
      contactName : this.firstname + " " + this.lastname,
      contactEmail : this.email,
      subject : this.subject,
      message : this.message
    });

    var config = {};

    $http.post('/api/contact', data, config)
      .then(
        function(response){
          // success callback

        },
        function(error){
          // failure callback
          console.error(error);
        }
      );

  }
}

angular.module('angularMaterialClinidamApp')
  .component('contact', {
    templateUrl: 'app/contact/contact.html',
    controller: ContactComponent,
    controllerAs: 'vm'
  });

})();
