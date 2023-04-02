(function() { 'use strict';

    function Internal($document, productViewResolve) {
        var vm = this;

		function toTheTop() {
			$document.scrollTopAnimated(0);
		}
		toTheTop();

		vm.product = productViewResolve;
		vm.friendly_price = vm.product.price / 100;


        vm.slickConfig = {
            enabled: true,
            dots: true,
            autoplay: true,
            speed: 400,
            autoplaySpeed: 6100,
            slidesToShow: 1,
            draggable: true,
            arrows: false,
            easing: 'linear',
            accessibility: true,
            swipe: true
        };
    }

    angular.module('app.product.view').controller('ProductViewController', Internal);

    Internal.$inject = ['$document', 'productViewResolve'];
})();
