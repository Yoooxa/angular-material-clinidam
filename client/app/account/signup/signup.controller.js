'use strict';

class SignupController {
  //start-non-standard
  user = {};
  errors = {};
  submitted = false;
  //end-non-standard

  constructor(Auth, $state, $mdToast) {
    this.Auth = Auth;
    this.$state = $state;
    this.mdToast = $mdToast;
  }

  register(form) {
    this.submitted = true;

    if (form.$valid) {
      this.Auth.createUser({
          name: this.user.name,
          email: this.user.email,
          password: this.user.password,
          gender: this.user.gender,
          birth: this.user.birthday,
          location: this.user.location
        })
        .then(() => {

        var $mdToast = this.mdToast;

        $mdToast.show(
          $mdToast.simple()
            .textContent("Votre compte doit être validé par un administrateur, nous vous contacterons quand vous pourrez l'utiliser !")
            .hideDelay(6000)
            .action("Compris !")
        );

          // Account created, redirect to home
          this.$state.go('main');
        })
        .catch(err => {
          err = err.data;
          this.errors = {};

          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, (error, field) => {
            form[field].$setValidity('mongoose', false);
            this.errors[field] = error.message;
          });
        });
    }
  }
}

angular.module('angularMaterialClinidamApp')
  .controller('SignupController', SignupController);
