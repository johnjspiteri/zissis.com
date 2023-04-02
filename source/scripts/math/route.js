(function() { 'use strict';

    function routes($stateProvider) {
        $stateProvider.state('app.math', {
            url: 'heart-math',
            metaTags: {
                title: 'Heart Math',
                description: 'Contact me to discuss a custom made HeartMath program for your organization, Resilience Advantage or Activating the Heart in Teams.'
            },
            views: {
                'page@': {
                    templateUrl: 'math/index.html',
					controller: 'MathController',
					controllerAs: 'vm'
                }
            }
        });
    }

    angular.module('app.math').config(routes);

    routes.$inject = ['$stateProvider'];
})();
