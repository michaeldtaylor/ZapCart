'use strict';

var cartController = function ($scope, $mdToast, cart) {
    $scope.cartItems = cart.getAllItems();
    $scope.totalCost = cart.totalCost();

    // Collection watch: http://teropa.info/blog/2014/01/26/the-three-watch-depths-of-angularjs.html
    $scope.$watchCollection('cartItems', function (newValue, oldValue) {
        if (newValue !== oldValue) {
            $scope.totalCost = cart.totalCost();
        }
    });

    // These should be directives according to: http://kirkbushell.me/when-to-use-directives-controllers-or-services-in-angular/
    $scope.incrementQuantity = function (product) {
        cart.incrementQuantity(product);
    }

    $scope.decrementQuantity = function (product) {
        cart.decrementQuantity(product);
    }

    $scope.removeFromCart = function (product) {
        cart.removeItem(product);

        $mdToast.show(
          $mdToast.simple()
            .content('Removed ' + product.name + ' from your cart!')
            .hideDelay(1000)
        );
    }
};

module.exports = cartController;