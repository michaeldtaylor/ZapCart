'use strict';

var productListController = function ($scope, productResource, cart) {
    $scope.products = productResource.query();
    
    $scope.addToCart = function (productResource) {
        cart.incrementQuantity(productResource);
    }
};

module.exports = productListController;