'use strict';

var Products = require('./../../../model/product.js');

module.exports = function(req, res) {
	Products.find({}, {"images.detail": 0, "testimonial": 0, "file": 0}, function(err, products) {
		if (err) return res.status(400).send(false);
        res.status(200).send(products);
	});
};
