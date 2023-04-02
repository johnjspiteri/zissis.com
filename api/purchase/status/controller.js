'use strict';

var stripe = require('stripe')('sk_test_B9BOhuSzp8WyJ26JmqcQ0ZPY');

module.exports = function(req, res) {
	stripe.customers.retrieve(req.params.subscription_id, function(err, customer) {
		if (err) return res.status(400).send(err);
		return res.send({delinquent: customer.delinquent});
	});
};
