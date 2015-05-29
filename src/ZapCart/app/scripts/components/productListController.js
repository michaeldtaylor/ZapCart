'use strict';

var productListController = function ($scope, productDataSource) {
    $scope.hello = "Hello";

    $scope.products = productDataSource.query();

    //productDataSource.load().then(function (products) { $scope.products = products; });
};

module.exports = productListController;