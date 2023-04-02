(function() { 'use strict';

    function Internal() {
        var vm = this;

        // vm.project = viewResolve;

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

    angular.module('app.event.view').controller('EventViewController', Internal);

    Internal.$inject = [];
})();
