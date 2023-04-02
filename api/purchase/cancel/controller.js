'use strict';

var async = require('async'),
    stripe = require('stripe')('sk_test_B9BOhuSzp8WyJ26JmqcQ0ZPY'),
    User = require('./../../../../model/user.js');

module.exports = function(req, res) {
    async.waterfall(
        [
            function(done) {
                User.findById(req.params._id, function(err, user) {
                    if (err) return res.status(400).send(err);
                    done(err, user);
                });
            },
            // Find Stripe customer account
            function(user, done) {
                stripe.customers.retrieve(user.private.subscription.id, function(err, customer) {
                    if (err) return res.status(400).send(err);
                    console.log('cancelling customer:', customer.subscriptions);
                    done(err, user, customer);
                });
            },
            // Delete Stripe customer subscription
            function(user, customer, done) {
                stripe.subscriptions.del(customer.subscriptions.data[0].id, function(
                    err,
                    confirmation
                ) {
                    if (err) return res.status(400).send(err);
                    if (confirmation.canceled_at) {
                        done(err, user);
                    }
                });
            }
        ],
        function(err, user) {
            if (err) return res.status(400).send(err);
            res.status(200).send({ user: user });
        }
    );
};
