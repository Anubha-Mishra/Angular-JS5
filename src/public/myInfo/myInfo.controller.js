(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);


MyInfoController.$inject = ['signedup', 'myinfo', 'UserService', 'MenuService','ApiPath'];
function MyInfoController(signedup, myinfo, UserService, MenuService, ApiPath) {
  var myInfoCtrl = this;
  myInfoCtrl.myInfo = myinfo;
  myInfoCtrl.basePath = ApiPath;
  myInfoCtrl.isSignedup = function(){
    if (myInfoCtrl.myInfo.firstname) {
      return true;
    }
    return false;
  };
  var error = {};
}

})();
