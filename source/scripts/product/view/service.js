(function() { 'use strict';

    function internal($resource) {
        return $resource('/api/product/view/:clean', {clean: "@clean"}, {
            get: {
                method: 'GET',
                isArray: false
            }
        });
    }

    angular.module('app.product.view').factory('productView', internal);

    internal.$inject = ['$resource'];
})();
