(function() { 'use strict';

	angular.module('app.product.view.purchase.transaction.detail').controller('ProductViewPurchaseTransactionDetailController', ['$document', '$state', '$stateParams', 'paymentFactory', 'productViewResolve', function($document, $state, $stateParams, paymentFactory, productViewResolve) {

		var vm = this;
		vm.submitted = false;

		function toTheTop() {
			$document.scrollTopAnimated(0);
		}
		toTheTop();

		vm.user = paymentFactory.get();
		console.log('user:', vm.user);

		vm.submit = function() {
			vm.submitted = true;
			paymentFactory.set(vm.user);
			$state.go('app.product.view.purchase.transaction.payment', {
				user: vm.user
			});
		};
	}]);
})();
