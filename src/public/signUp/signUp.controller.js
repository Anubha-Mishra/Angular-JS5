(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);


SignUpController.$inject = ['signedup', 'UserService', 'MenuService'];
function SignUpController(signedup, UserService, MenuService) {
  var $ctrl = this;
  $ctrl.user = {};
  $ctrl.error = {};

  $ctrl.signedup = signedup;

  $ctrl.submit = function() {
    MenuService.getItem($ctrl.user.menucode.short_name)
    .then(
      function (response) {
        $ctrl.user.menucode = response;
        UserService.signUpDetails($ctrl.user);
        $ctrl.signedup = true;
        $ctrl.error.msg = 'Your information has been saved';
      },
      function (error) {
        $ctrl.error.msg = 'No such menu number exists.';
    });
  };
}

})();
