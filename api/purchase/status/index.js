"use strict";

var express = require('express'),
	controller = require('./controller.js'),
	router = express.Router();

router.post('/:subscription_id', controller);

module.exports = router;
