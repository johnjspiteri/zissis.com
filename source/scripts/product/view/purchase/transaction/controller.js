(function() { 'use strict';

    function Internal($document, $state, paymentFactory, productViewResolve) {
        var vm = this;

    		vm.product = productViewResolve;
    		vm.friendly_price = vm.product.price / 100;
        vm.form = paymentFactory.get();

        function toTheTop() {
          $document.scrollTopAnimated(0);
        }
        toTheTop();

    		vm.close = function() {
    			$state.go('app.product.view', {clean: vm.product.clean});
          toTheTop();
    		};
    }

    angular.module('app.product.view.purchase.transaction').controller('ProductViewPurchaseTransactionController', Internal);

    Internal.$inject = ['$document', '$state', 'paymentFactory', 'productViewResolve'];
})();
