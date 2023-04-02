(function() { 'use strict';

	function internal($stateProvider) {
		$stateProvider.state('app.product.view.purchase.transaction', {
			abstract: true,
			url: '',
			// metaTags: {
			//     title: ['viewResolve', function(viewResolve) {
			//         return (viewResolve.title + ' - ' + viewResolve.category + ' - ' + viewResolve.year);
			//     }],
			//     description: ['viewResolve', function(viewResolve) {
			//         return viewResolve.description;
			//     }]
			// },
			views: {
				'modal@': {
					templateUrl: 'product/view/purchase/payment/index.html',
					controller: 'ProductViewPurchaseTransactionController',
					controllerAs: 'vm'
				}
			}
		});
	}

	angular.module('app.product.view.purchase.transaction').config(internal);

	internal.$inject = ['$stateProvider'];
})();
