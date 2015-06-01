'use strict';

var _ = require('underscore');

var appController = function ($scope, $location, $mdSidenav) {
    var self = this;

    self.currentPath = $location.path();

    self.tabs = [{
        "label": "Products",
        "path": "/"
    }, {
        "label": "Cart",
        "path": "/cart"
    }];

    var locationTabIndex = _.findIndex(self.tabs, function (tab) {
        return tab.path === self.currentPath;
    });

    function toggleSidenav(name) {
        $mdSidenav(name).toggle();
    }

    $scope.toggleSidenav = toggleSidenav;
    $scope.selectedTabIndex = locationTabIndex;
    $scope.tabs = self.tabs;

    $scope.switchTab = function (index) {
        $location.path(self.tabs[index].path);
    }
};

module.exports = appController;