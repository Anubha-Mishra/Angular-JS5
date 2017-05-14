(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);


MyInfoController.$inject = ['signedup', 'myinfo', 'UserService', 'MenuService','ApiPath'];
function MyInfoController(signedup, myinfo, UserService, MenuService, ApiPath) {
  var $ctrl = this;
  $ctrl.myInfo = myinfo;
  $ctrl.basePath = ApiPath;
  $ctrl.isSignedup = function(){
    if ($ctrl.myInfo.firstname) {
      return true;
    }
    return false;
  };
  var error = {};
}

})();
