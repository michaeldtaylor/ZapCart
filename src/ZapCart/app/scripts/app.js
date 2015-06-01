'use strict';

var angular = require('angular');
require('ngstorage');

// Controllers
var appController = require('./components/appController');
var productListController = require('./components/productListController');
var productSearchController = require('./components/productSearchController');
var cartController = require('./components/cartController');

// Services
var productResource = require('./services/productResource');
var cart = require('./services/cart');

var app = angular.module('zapCartApp', [
    require('angular-route'),
    require('angular-resource'),
    require('angular-aria'),
    require('angular-animate'),
    require('angular-material'),
    'ngStorage'
]);

app.config(['$routeProvider', '$locationProvider', '$mdIconProvider', function ($routeProvider, $locationProvider, $mdIconProvider) {
    // Specify routes to load our partials upon the given URLs
    $routeProvider.when('/', { templateUrl: 'views/products.html' });
    $routeProvider.when('/cart', { templateUrl: 'views/cart.html' });
    $routeProvider.otherwise({ redirectTo: '/' });

    $locationProvider.html5Mode(true);

    $mdIconProvider
        .defaultIconSet('styles/images/material-design-iconsets/icons-icons.svg', 24)
        .iconSet('action', 'styles/images/material-design-iconsets/action-icons.svg', 24)
        .iconSet('alert', 'styles/images/material-design-iconsets/alert-icons.svg', 24)
        .iconSet('av', 'styles/images/material-design-iconsets/av-icons.svg', 24)
        .iconSet('communication', '/styles/images/material-design-iconsets/communication-icons.svg', 24)
        .iconSet('content', 'styles/images/material-design-iconsets/content-icons.svg', 24)
        .iconSet('device', 'styles/images/material-design-iconsets/device-icons.svg', 24)
        .iconSet('editor', 'styles/images/material-design-iconsets/editor-icons.svg', 24)
        .iconSet('file', 'styles/images/material-design-iconsets/file-icons.svg', 24)
        .iconSet('hardware', 'styles/images/material-design-iconsets/hardware-icons.svg', 24)
        .iconSet('icons', 'styles/images/material-design-iconsets/icons-icons.svg', 24)
        .iconSet('image', 'styles/images/material-design-iconsets/image-icons.svg', 24)
        .iconSet('maps', 'styles/images/material-design-iconsets/maps-icons.svg', 24)
        .iconSet('navigation', 'styles/images/material-design-iconsets/navigation-icons.svg', 24)
        .iconSet('notification', 'styles/images/material-design-iconsets/notification-icons.svg', 24)
        .iconSet('social', 'styles/images/material-design-iconsets/social-icons.svg', 24)
        .iconSet('toggle', 'styles/images/material-design-iconsets/toggle-icons.svg', 24);
}]);

// Create services/factories
app.factory('productResource', ['$resource', productResource]);
app.factory('cart', ['$localStorage', cart]);

// Create controllers
app.controller('appController', ['$rootScope', '$location', '$mdSidenav', appController]);
app.controller('productSearchController', ['$scope', '$timeout', '$q', '$log', 'productResource', productSearchController]);
app.controller('productListController', ['$scope', '$mdDialog', '$mdToast', 'productResource', 'cart', productListController]);
app.controller('cartController', ['$scope', '$mdToast', 'cart', cartController]);