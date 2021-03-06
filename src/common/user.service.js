(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);


  function UserService() {
    var service = this;
    service.user = {};

    service.signedUp = function() {

      if(service.user.firstname) {
        return true;
      } else {
        return false;
      }

    };

    service.signUpDetails = function(user) {
      service.user = user;
    };

    service.getUserInfo = function() {
      return service.user;
    }

  }

})();
