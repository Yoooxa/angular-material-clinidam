'use strict';

(function() {

  class AdminController {
    constructor(User, $http, $state) {
      // Use the User $resource to fetch all users
      this.users = User.query();
      this.http = $http;
      this.state = $state;
    }

    debug(a) {
      console.log(a);
    }

    delete(user) {
      user.$remove();
      this.users.splice(this.users.indexOf(user), 1);
    }

    acceptUser(user) {
      var $http = this.http;
      var $state = this.state;

      var data = ({
        userId: user._id,
        state: "accepted"
      });

      var config = {};
      var url = "/api/users/validation/" + data.userId;

      $http.post(url, data, config)
        .then(
          function(response){
            // success callback
            $state.reload();
          },
          function(error){
            // failure callback
            console.error(error);
          }
        );
    }

    refuseUser(user) {
      var $http = this.http;
      var $state = this.state;

      var data = ({
        userId: user._id,
        state: "refused"
      });

      var config = {};
      var url = "/api/users/validation/" + data.userId;

      $http.post(url, data, config)
        .then(
          function(response){
            // success callback
            $state.reload();
          },
          function(error){
            // failure callback
            console.error(error);
          }
        );
    }
  }

  angular.module('angularMaterialClinidamApp.admin')
    .controller('AdminController', AdminController);
})();
