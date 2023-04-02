(function() { 'use strict';

    function routes($stateProvider) {
        $stateProvider.state('app.imagery', {
            url: 'heart-imagery',
            metaTags: {
                title: 'Heart Imagery',
                description: 'Heart Imagery is the most powerful meditation system on the planet now. Contact me to organize a workshop or look at the products section.'
            },
            views: {
                'page@': {
                    templateUrl: 'imagery/index.html',
					controller: 'ImageryController',
					controllerAs: 'vm'
                }
            }
        });
    }

    angular.module('app.imagery').config(routes);

    routes.$inject = ['$stateProvider'];
})();
