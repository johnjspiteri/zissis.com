(function() { 'use strict';

    function internal($stateProvider) {
        $stateProvider.state('app.product.list', {
            url: '',
            metaTags: {
                title: 'Products',
                description: 'Buy one of these products, Breathe book, How to meditate book, Heart Imagery Web course.'
            },
            resolve: {
                productListResolve: ['productList', function(productList) {
                    return productList.get().$promise;
                }]
            },
            views: {
                'page@': {
                    templateUrl: 'product/list/index.html',
                    controller: 'ProductListController',
                    controllerAs: 'vm'
                }
            }
        });
    }

    angular.module('app.product.list').config(internal);

    internal.$inject = ['$stateProvider'];
})();
