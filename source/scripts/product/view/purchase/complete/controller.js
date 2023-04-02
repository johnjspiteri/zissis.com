(function() { 'use strict';

	angular.module('app.product.view.purchase.complete').controller('ProductViewPurchaseCompleteController', ['$document', '$state', '$stateParams', function($document, $state, $stateParams) {

		var vm = this;

		if (!$stateParams.transaction_id) {
			if($stateParams.clean) {
				$state.go('app.product.view', {clean: $stateParams.clean});
			} else {
				$state.go('app.product.list');
			}
		} else {
			vm.first_name = $stateParams.first_name;
			vm.product = $stateParams.product;
			vm.friendly_price = vm.product.price / 100;
			vm.transaction_id = $stateParams.transaction_id;
		}

		function toTheTop() {
			$document.scrollTopAnimated(0);
		}
		toTheTop();

	}]);
})();
