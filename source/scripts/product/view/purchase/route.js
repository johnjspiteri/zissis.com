(function() { 'use strict';

    function internal($stateProvider) {
        $stateProvider.state('app.product.view.purchase', {
			abstract: true,
            url: '/purchase',
            // metaTags: {
            //     title: ['viewResolve', function(viewResolve) {
            //         return (viewResolve.title + ' - ' + viewResolve.category + ' - ' + viewResolve.year);
            //     }],
            //     description: ['viewResolve', function(viewResolve) {
            //         return viewResolve.description;
            //     }]
            // }
        });
    }

    angular.module('app.product.view.purchase').config(internal);

    internal.$inject = ['$stateProvider'];
})();
