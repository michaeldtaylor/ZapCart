'use strict';

var cartController = function ($scope, cart) {
    $scope.cartItems = cart.cartItems;

    // Deep scan - slow!: http://teropa.info/blog/2014/01/26/the-three-watch-depths-of-angularjs.html
    $scope.$watchCollection('cartItems', function () {
        $scope.totalCost = cart.totalCost();
    });

    $scope.incrementQuantity = function (productResource) {
        cart.incrementQuantity(productResource);
    }

    $scope.decrementQuantity = function (productResource) {
        cart.decrementQuantity(productResource);
    }

    $scope.removeFromCart = function (productResource) {
        cart.removeItem(productResource);
    }
};

module.exports = cartController;