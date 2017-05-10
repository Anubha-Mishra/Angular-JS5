(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['signedUp', 'MenuService', 'UserService'];
function SignUpController(signedUp, MenuService, UserService) {
  var $ctrl = this;
  $ctrl.user = {};
  $ctrl.error = {};
  $ctrl.signedUp = signedUp;
  $ctrl.submit = function() {
    MenuService.getItems($ctrl.user.menucode.short_name)
    .then(function(response) {
      $ctrl.user.menucode = response;
      $ctrl.signedUp = true;
      UserService.signUpDetails($ctrl.user);
      $ctrl.error.message = "Your Information has been saved.";
    },
    function(error) {
      $ctrl.error.message = "No such menu exists.";
    });
  };
}


})();
