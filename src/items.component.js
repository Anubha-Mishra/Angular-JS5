(function () {
  'use strict';

  angular.module('data')
  .component('itemList', {
    templateUrl: 'src/templates/item-list-details.template.html',
    bindings: {
      item: '<'
    }
  })
  .controller('ItemListController', ItemListController);

  ItemListController.$inject = ['$stateParams', 'item'];
  function ItemListController($stateParams, item) {
    var itemDetail = this;
    var items = item.menu_items[$stateParams.itemId];
    itemDetail = items.description;
  }
})();
