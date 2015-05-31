'use strict';

var appController = function ($scope, $mdSidenav) {
    function toggleSidenav(name) {
        $mdSidenav(name).toggle();
    }

    $scope.toggleSidenav = toggleSidenav;
};

module.exports = appController;