(function() {
    'use strict';

    angular.module('app').controller('PanelController', Panel);

    Panel.$inject = ['$mdSidenav', '$rootScope'];

    function Panel($mdSidenav, $rootScope) {
        var vm = this;

        vm.close = function() {
            vm.backdrop = false;
            $mdSidenav('panel')
                .close()
                .then(function() {});
        };

        $rootScope.$on('open', function() {
            vm.backdrop = true;
            $mdSidenav('panel')
                .open()
                .then(function() {});
        });
    }
})();
