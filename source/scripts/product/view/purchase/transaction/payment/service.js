(function() { 'use strict';

    function internal($resource) {
//        return $resource('https://app.callsystem.io/api/user/register/create/:_id', { _id: '@_id' }, {
        return $resource('/api/purchase/transaction/:_id', { _id: '@_id' }, {
            post: {
                method: 'POST'
            }
        });
    }

    angular.module('app.product.view.purchase.transaction.payment').factory('productPurchase', internal);

    internal.$inject = ['$resource'];
})();
