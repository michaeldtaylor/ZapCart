'use strict';

var angular = require('angular');
require('angular-route');
require('angular-resource');

// Controllers
var productListController = require('./components/productListController');

// Services
var productDataSource = require('./services/productDataSource');

var app = angular.module('zapCartApp', ['ngRoute', 'ngResource']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    // Specify routes to load our partials upon the given URLs
    $routeProvider.when('/', { templateUrl: 'views/products.html' });
    $routeProvider.when('/cart', { templateUrl: 'views/cart.html' });
    $routeProvider.otherwise({ redirectTo: '/' });

    $locationProvider.html5Mode(true);
}]);

// Create factories
app.factory('productDataSource', ['$resource', productDataSource]);

// Create controllers
app.controller('productListController', ['$scope', 'productDataSource', productListController]);