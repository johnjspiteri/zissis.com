(function() { 'use strict';

	angular.module('app.product.view.purchase.transaction.payment').controller('ProductViewPurchaseTransactionPaymentController', ['$document', '$state', '$stateParams', 'productPurchase', 'productViewResolve', function($document, $state, $stateParams, productPurchase, productViewResolve) {
			var vm = this;

			if (!$stateParams.user) {
				$state.go('app.product.view.purchase.transaction.account');
			} else {
				vm.user = $stateParams.user;
				vm.product = productViewResolve;
			}

			function toTheTop() {
				$document.scrollTopAnimated(0);
			}
			toTheTop();

			vm.process = function(response) {
				vm.user.payment = response.token;
				productPurchase.post({_id: '1234'}, {
					product: productViewResolve,
					user: vm.user


				}).$promise.then(function(transaction_id) {
					console.log('transaction id:', transaction_id);

					$state.go('app.product.view.purchase.complete', {
						first_name: vm.user.personal.name.first,
						product: productViewResolve,
						transaction_id: transaction_id
					});
				});
			};
		}
	]);
})();
