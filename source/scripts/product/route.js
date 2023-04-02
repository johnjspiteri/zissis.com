(function() { 'use strict';

    function internal($stateProvider) {
		$stateProvider.state('app.product', {
			abstract : true,
			url : 'products',
			views : null
		});
    }

    angular.module('app.product').config(internal);

    internal.$inject = ['$stateProvider'];
})();
