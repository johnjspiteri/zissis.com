'use strict';

var async = require('async'),
	stripe = require('stripe')('sk_test_aQnPvmYSFxEB2EnMuYFXeq8300MjrDcPLg'),
	transport = require('./../../transport/index');

module.exports = function(req, res) {
	console.log('target:', req.body.user.billing);

	async.waterfall([
		// Checking customer state
		function(done) {
			stripe.customers.list({ email: req.body.user.email },
				function(err, customers) {
					var person = {
						email: req.body.user.personal.email,
						name: req.body.user.personal.name.first + ' ' + req.body.user.personal.name.last,
						source: req.body.user.payment.id
					};
					// Check if customer exists
					if(customers.data.length && customers.data[0].email === req.body.user.personal.email) {
						stripe.customers.update(customers.data[0].id, person, function(err, customer) {
								done(err, customer);
							}
						);
					// Or create new customer
					} else {
						stripe.customers.create(person, function(err, customer) {
							done(err, customer);
						});
					}
				}
			);
		},
		// Process transaction
		function(customer, done) {
			stripe.charges.create({
				amount: req.body.product.price,
				currency: "usd",
				customer: customer.id,
				description: req.body.product.sku
			}, function(err, charge) {
				if (err) return res.status(400).send(err);
                done(err, charge);
			});
		},
		// Message confirmation to user
		function(charge, done) {
//			console.log('charge:', charge);
			var message = {
				from: 'Zissis Liolios Online Store <purchase@zissisliolios.com>',
				to: req.body.user.personal.name.first + ' ' + req.body.user.personal.name.last  + ' <' + req.body.user.personal.email + '>',
				subject: 'Thank You For Your Purchase ' + req.body.user.personal.name.first + '!',
				text: 'Hi ' + req.body.user.personal.name.first + ',\n\nYour purchase is complete and your confirmation number is "' + charge.id + '".\n\n Access and view your receipt here - ' + charge.receipt_url + '.\n\n Please contact us if you have any questions or comments at "support@zissisliolios.com".\n\nThank you for your purchase,\nZissis Liolios',
				html: ''
			};

			transport.sendMail(message, function(err) {
				if (err) console.log('err:', err);
//				if (err) return err;
				done(err, charge);
			});

		}
	],
	function(err, charge) {
		if (err) return res.status(400).send(err);
		console.log('charge id:', charge.id);

		res.status(200).json({
			transaction_id: charge.id
		});
	});
};
