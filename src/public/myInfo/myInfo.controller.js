(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);


MyInfoController.$inject = ['signedup', 'myinfo', 'UserService', 'MenuService'];
function MyInfoController(signedup, myinfo, UserService, MenuService) {
  var myInfoCtrl = this;
  myInfoCtrl.myInfo = myinfo;
  myInfoCtrl.isSignedup = function(){
    if (myInfoCtrl.myInfo.firstname) {
      return true;
    }
    return false;
  };
  var error = {};
}

})();
