'use strict';

var productListController = function ($scope, $mdDialog, $mdToast, productRepository, cart) {
    $scope.products = productRepository.query();
    
    //$scope.addToCart = function (product, event) {
    //    $mdDialog.show(
    //      $mdDialog.alert()
    //        .title('Adding item to cart')
    //        .content('Added an item to the cart!')
    //        .ariaLabel('Adding item')
    //        .ok('Ok')
    //        .targetEvent(event)
    //    );

    //    cart.incrementQuantity(product);
    //};

    $scope.addToCart = function (product) {
        cart.incrementQuantity(product);

        $mdToast.show(
          $mdToast.simple()
            .content('Added 1x ' + product.name + ' to your cart!')
            .hideDelay(1000)
        );
    };
};

module.exports = productListController;