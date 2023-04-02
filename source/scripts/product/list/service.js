(function() { 'use strict';

    function internal($resource) {
        return $resource('/api/product/list', {}, {
            get: {
                method: 'GET',
                isArray: true
            }
        });
    }

    angular.module('app.product.list').factory('productList', internal);

    internal.$inject = ['$resource'];
})();
