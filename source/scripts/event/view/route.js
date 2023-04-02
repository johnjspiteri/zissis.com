(function() { 'use strict';

    function internal($stateProvider) {
        $stateProvider.state('app.event.view', {
            url: '/:clean',
            // resolve: {
            //     viewResolve: ['$stateParams', 'projectView', function($stateParams, projectView) {
            //         return projectView.get({ clean: $stateParams.clean }).$promise;
            //     }]
            // },
            // metaTags: {
            //     title: ['viewResolve', function(viewResolve) {
            //         return (viewResolve.title + ' - ' + viewResolve.category + ' - ' + viewResolve.year);
            //     }],
            //     description: ['viewResolve', function(viewResolve) {
            //         return viewResolve.description;
            //     }]
            // },
            views: {
                'page@': {
                    templateUrl: '/event/view/index.html',
                    controller: 'EventViewController',
                    controllerAs: 'vm'
                }
            }
        });
    }

    angular.module('app.event.view').config(internal);

    internal.$inject = ['$stateProvider'];
})();
