(function() { 'use strict';

    function internal($stateProvider) {
        $stateProvider.state('app.product.view.purchase.transaction.payment', {
            url: '/payment',
            metaTags: {
				title: ['productViewResolve', function(productViewResolve) {
					return ('Payment Information | ' + productViewResolve.title + ' Product Purchase');
				}],
				description: 'Please enter your payment information'
            },
            views: {
                'form@app.product.view.purchase.transaction': {
                    templateUrl: 'product/view/purchase/transaction/payment/index.html',
                    controller: 'ProductViewPurchaseTransactionPaymentController',
                    controllerAs: 'vm'
                }
            },
            params: {
                product: null,
                user: null
            }
        });
    }

    angular.module('app.product.view.purchase.transaction.payment').config(internal);

    internal.$inject = ['$stateProvider'];
})();
