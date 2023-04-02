'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var ImageSchema = new Schema({
	file_type: String,
	base64: String
}, {_id: false});

module.exports = mongoose.model('Image', ImageSchema);
