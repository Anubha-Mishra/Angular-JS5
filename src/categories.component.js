(function () {
  'use strict';

  angular.module('data')
  .component('categoryList', {
    templateUrl: 'src/templates/caterogy-list-items.template.html',
    bindings: {
      categories: '<'
    }
  })
  .controller('CategoriesListController', CategoriesListController);

  CategoriesListController.$inject = ['categories']
  function CategoriesListController(categories) {
    var categoryList = this;
    categoryList.catogary = categories;
  }
})();
