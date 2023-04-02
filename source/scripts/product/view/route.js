(function() { 'use strict';

	function internal($stateProvider) {
		$stateProvider.state('app.product.view', {
			url: '/:clean',
			resolve: {
				productViewResolve: ['$stateParams', 'productView', function($stateParams, productView) {
					return productView.get({clean: $stateParams.clean}).$promise;
				}]
			},
			metaTags: {
				title: ['productViewResolve', function(productViewResolve) {
					productViewResolve.title = productViewResolve.title || '';
					if(productViewResolve.title) {
						return (productViewResolve.title + ' | ' + productViewResolve.category);
					}
				}],
				description: ['productViewResolve', function(productViewResolve) {
					productViewResolve.description = productViewResolve.description || {};
					if(productViewResolve.description.summary) {
						return productViewResolve.description.summary;
					}
				}]
			},
			views: {
				'page@': {
					templateUrl: 'product/view/index.html',
					controller: 'ProductViewController',
					controllerAs: 'vm'
				}
			}
		});
	}

	angular.module('app.product.view').config(internal);

	internal.$inject = ['$stateProvider'];
})();
