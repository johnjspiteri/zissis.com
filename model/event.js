'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EventSchema = new Schema({
    images: {
        thumb: {
        	file_type: String,
        	base64: String
        },
        detail: {
        	file_type: String,
        	base64: String
        }
    },
    category: String,
    clean: String,
	instructor: {
    	name: String,
		phone: Number,
		title: String,
		email: String
	},
    date: Date,
    description: String,
    file: Object,
	location: {
    	address: String,
		latitude: Number,
		longitude: Number,
		city: String
	},
	registration: {
    	participants: Array,
    	tickets: Number,
	},
    title: String,
    summary : String
});

module.exports = mongoose.model('Event', EventSchema);
