'use strict';

var cartController = function ($scope, cart) {
    $scope.cartItems = cart.getAllItems();
    $scope.totalCost = cart.totalCost();

    // Collection watch: http://teropa.info/blog/2014/01/26/the-three-watch-depths-of-angularjs.html
    $scope.$watchCollection('cartItems', function (newValue, oldValue) {
        if (newValue !== oldValue) {
            $scope.totalCost = cart.totalCost();
        }
    });

    // These should be directives according to: http://kirkbushell.me/when-to-use-directives-controllers-or-services-in-angular/
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