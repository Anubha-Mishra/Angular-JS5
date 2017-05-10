(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['signedUp', 'myInformation','MenuService', 'UserService'];
function MyInfoController(signedUp, myInformation, MenuService, UserService) {
  var $ctrl = this;
  $ctrl.myInformation = myInformation;
  $ctrl.isSignedUp = function() {
    if ($ctrl.myInformation.firstname) {
      return true;
    }
    return false;
  };
}
})();
