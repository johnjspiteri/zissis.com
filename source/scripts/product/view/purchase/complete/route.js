(function() { 'use strict';

	function internal($stateProvider) {
		$stateProvider.state('app.product.view.purchase.complete', {
			url: '/complete',
			metaTags: {
				title: ['productViewResolve', function(productViewResolve) {
					return (productViewResolve.title + ' Product Purchase Complete');
				}],
				description: 'Your online product purchase is complete.'
			},
			views: {
				'modal@': {
					templateUrl: 'product/view/purchase/complete/index.html',
					controller: 'ProductViewPurchaseCompleteController',
					controllerAs: 'vm'
				}
			},
			params: {
				product: null,
				first_name: null,
				transaction_id: null
			}
		});
	}

	angular.module('app.product.view.purchase.complete').config(internal);

	internal.$inject = ['$stateProvider'];
})();
