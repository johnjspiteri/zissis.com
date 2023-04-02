(function() { 'use strict';

    function Internal($document, localStorageService, productListResolve) {
        var vm = this;
        vm.state = false;

		vm.products = productListResolve;
//		console.log('products:', vm.products);

		function toTheTop() {
			$document.scrollTopAnimated(0);
		}
		toTheTop();

		vm.changeState = function() {
            vm.state = !vm.state;
        };

        vm.search = {
            category: '',
            categories: ['', 'Coaching', 'HeartMath', 'Mediation', 'Yoga'],
            medium: '',
	           mediums: ['', 'Audio', 'Book', 'Online', 'Personal', 'Video'],
            filter: ''
        };

		vm.reset = function() {
			vm.search.category = '';
			vm.search.medium = '';
			vm.search.filter = '';
		};

        // Initialize local storage if any
//        vm.search.category = localStorageService.get('category') || '';
//        vm.search.genre = localStorageService.get('genre') || '';
//        vm.search.tag = localStorageService.get('tag') || '';

        // Build categories once
//        var output = [], i = 0, length = vm.products.length;
//        for (i; i < length; i++) {
//            output.push(vm.products[i].category);
//        }
        // Filter out duplicates
//        vm.search.categories = output.filter(function(elem, index, vm) {
//            return index === vm.indexOf(elem);
//        });

        // Add empty first value
//        vm.search.categories.sort().unshift('');

        // Build tags on demand
//        vm.buildTags = function() {
//            vm.search.tags = [];
//            var holder = [];
//            var output = [];
//            var i = 0;
//            var length = vm.projects.length;
//
//            for (i; i < length; i++) {
//                if (vm.projects[i].category === vm.search.category) {
//                    holder = output;
//                    output = holder.concat(vm.projects[i].tags);
//                }
//            }
//
//            // Filter out duplicates
//            vm.search.tags = output.filter(function(elem, index, vm) {
//                return index === vm.indexOf(elem);
//            });
//
//            // Add empty first value
//            vm.search.tags.sort().unshift('');
//            localStorageService.set('category', vm.search.category);
//            localStorageService.set('tag', vm.search.tag);
//        };
//        vm.buildTags();

//        vm.changeTags = function() {
//            localStorageService.set('tag', vm.search.tag);
//        };
    }

    angular.module('app.product.list').controller('ProductListController', Internal);

    Internal.$inject = ['$document', 'localStorageService', 'productListResolve'];
})();
