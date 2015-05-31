'use strict';

var angular = require('angular');

// Controllers
var appController = require('./components/appController');
var productListController = require('./components/productListController');
var cartController = require('./components/cartController');

// Services
var productResource = require('./services/productResource');
var cart = require('./services/cart');

var app = angular.module('zapCartApp', [
    require('angular-route'),
    require('angular-resource'),
    require('angular-aria'),
    require('angular-animate'),
    require('angular-material')
]);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    // Specify routes to load our partials upon the given URLs
    $routeProvider.when('/', { templateUrl: 'views/products.html' });
    $routeProvider.when('/cart', { templateUrl: 'views/cart.html' });
    $routeProvider.otherwise({ redirectTo: '/' });

    $locationProvider.html5Mode(true);
}]);

// Create services/factories
app.factory('productResource', ['$resource', productResource]);
app.factory('cart', cart);

// Create controllers
app.controller('appController', ['$scope', '$mdSidenav', appController]);
app.controller('productListController', ['$scope', 'productResource', 'cart', productListController]);
app.controller('cartController', ['$scope', 'cart', cartController]);