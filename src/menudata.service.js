(function () {
  angular.module('data')
  .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http'];
  function MenuDataService($http) {
    var service = this;

    service.getAllCategories = function() {
      var response = $http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/categories.json"
        }).then(function (response) {
          var categoryList = response.data;
          return categoryList;
        }).catch(function (error) {
          console.log("Something went terribly wrong.");
        });
      return response;
    }

    service.getItemsForCategory = function(categoryShortName) {
      var response = $http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/menu_items.json"
        }).then(function (response) {
          var itemsList = response.data;
          return itemsList;
        }).catch(function (error) {
          console.log("Something went terribly wrong.");
        });
      return response;
    }
  }
})();
