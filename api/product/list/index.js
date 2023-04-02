'use strict';

var express = require('express'),
	controller = require('./controller'),
	router = express.Router();

router.get('/',  controller);

module.exports = router;
