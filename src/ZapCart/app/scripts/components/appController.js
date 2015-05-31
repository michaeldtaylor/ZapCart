'use strict';

var appController = function ($rootScope, $mdSidenav) {
    function toggleSidenav(name) {
        $mdSidenav(name).toggle();
    }

    $rootScope.toggleSidenav = toggleSidenav;
};

module.exports = appController;