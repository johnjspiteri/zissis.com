'use strict';

var express = require('express'),
    controller = require('./controller.js'),
    router = express.Router();

router.get('/:clean', controller);

module.exports = router;
