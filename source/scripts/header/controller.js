(function() {
    'use strict';

    angular.module('app').controller('HeaderController', Internal);

    Internal.$inject = ['$rootScope'];

    function Internal($rootScope) {
        var vm = this;

        vm.open = function() {
            $rootScope.$emit('open', {});
        };
    }
})();
