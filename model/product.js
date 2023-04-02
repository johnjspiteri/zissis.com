'use strict';

var mongoose = require('mongoose'),
		Image = require('./image.js'),
	Schema = mongoose.Schema;

var ProductSchema = new Schema({
	category: String,
	clean: String,
	creator: {
		image: Image.schema,
		name: String,
		title: String
	},
	description: {
		small: String,
		large: String,
		summary : String,
	},
	file: Object,
	images: {
		thumb: Image.schema,
		detail: [Image.schema]
	},
	medium: String,
	price: Number,
	sku: String,
	title: String,
	testimonial: {
		author: String,
		image: Image.schema,
		statement: String,
	}
});

module.exports = mongoose.model('Product', ProductSchema);
