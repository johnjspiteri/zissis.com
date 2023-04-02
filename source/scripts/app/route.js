(function() { 'use strict';

    function internal($stateProvider) {
        $stateProvider.state('app', {
            abstract: true,
            url: '/',
            views: {
                'panel@': {
                    templateUrl: 'panel/index.html',
                    controller: 'PanelController',
                    controllerAs: 'vm'
                },
                'header@': {
                    templateUrl: 'header/index.html',
                    controller: 'HeaderController',
                    controllerAs: 'vm'
                },
				'footer@': {
                    templateUrl: 'footer/index.html',
                    controller: 'FooterController',
                    controllerAs: 'vm'
                }
            }
        });
    }

    angular.module('app').config(internal);

    internal.$inject = ['$stateProvider'];
})();
