(function() {
    'use strict';

    function internal() {
        var fields = {
          name : {
    				first : '',
    				last : ''
    			},
    			address_line1: '',
    			address_line2: '',
    			address_city: '',
    			address_state: '',
    			address_zip: '',
    			address_country: '',
    			email: ''
        };

        var factory = fields;

        factory.get = function() {
            return factory;
        };

        factory.set = function(data) {
          factory = data;
        };

        return factory;
    }

    angular.module('app.product.view.purchase.transaction.payment').factory('paymentFactory', internal);

    internal.$inject = [];
})();
