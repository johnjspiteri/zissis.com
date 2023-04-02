(function() { 'use strict';

    angular.module('app.common').component('paymentForm', {
        bindings: {
            user: '<',
            process: '<'
        },
        controller: function(StripeElements) {
            var ctrl = this;
            var elements = StripeElements.elements();
            var card = elements.create('cardNumber', {});
            var expiry = elements.create('cardExpiry', {});
            var cvc = elements.create('cardCvc', {});

            card.mount('#card-element');
            expiry.mount('#expiry-element');
            cvc.mount('#cvc-element');
            card.on('change', handleChange);

            function handleChange(e) {
                ctrl.cardErrors = e.error ? e.error.message : '';
            }

            ctrl.card = card;
            ctrl.expiry = expiry;
            ctrl.cvc = cvc;
            ctrl.submitted = false;

            ctrl.handleSubmit = function() {
				ctrl.submitted = true;
                var extraValues = {
                    name: this.user.billing.name.first + ' ' + this.user.billing.name.last,
                    address_line1: this.user.billing.address_line1,
                    address_line2: this.user.billing.address_line2,
                    address_city: this.user.billing.address_city,
                    address_state: this.user.billing.address_state,
                    address_zip: this.user.billing.address_zip,
                    address_country: this.user.billing.address_country
                };
                StripeElements.createToken(card, extraValues).then(function(response) {
                    if (response.error) {
                        ctrl.submitted = false;
                        ctrl.cardErrors = response.error.message;
                    } else {
                        ctrl.process(response);
                    }
                });
            };
        },
        templateUrl: 'common/component/card/index.html'
    });
})();
