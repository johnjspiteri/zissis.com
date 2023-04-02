(function() { 'use strict';

    function internal($stateProvider) {
        $stateProvider.state('app.product.view.purchase.transaction.detail', {
            url: '/details',
            metaTags: {
      				title: ['productViewResolve', function(productViewResolve) {
      					return ('Personal Details | ' + productViewResolve.title + ' Product Purchase');
      				}],
			        description: 'Please enter your personal details'
            },
            views: {
                'form@app.product.view.purchase.transaction': {
                    templateUrl: 'product/view/purchase/transaction/detail/index.html',
                    controller: 'ProductViewPurchaseTransactionDetailController',
                    controllerAs: 'vm'
                }
            }
        });
    }

    angular.module('app.product.view.purchase.transaction.detail').config(internal);

    internal.$inject = ['$stateProvider'];
})();
