'use strict';

var Products = require('./../../../model/product.js');

module.exports = function(req, res) {
    Products.findOne({clean: req.params.clean}, function(err, product) {
        if (err) return res.status(404).send(err)
		if (!product) return res.status(404).send(err)
        return res.status(200).send(product);
    });
};
