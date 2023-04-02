'use strict';

var nodemailer = require('nodemailer'),
    sesTransport = require('nodemailer-ses-transport'),
    transport = nodemailer.createTransport(
        sesTransport({
            accessKeyId: 'AKIAX3RGGFW3YHTK5RXM',
            secretAccessKey: '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',
            ServiceUrl: 'email-smtp.us-east-1.amazonaws.com',
            rateLimit: 1
        })
    );

module.exports = transport;
