(function() { 'use strict';

    angular.module('app.coaching').controller('CoachingController', Internal);

    Internal.$inject = ['$document'];

    function Internal($document) {
        var vm = this;

		function toTheTop() {
			$document.scrollTopAnimated(0);
		}
		toTheTop();

		vm.slickConfig = {
            enabled: true,
            accessibility: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: '4100',
            dots: true,
            draggable: true,
            easing: 'linear',
            infinite: true,
            slidesToShow: '1',
            speed: '400',
            swipe: true
        };
    }
})();
