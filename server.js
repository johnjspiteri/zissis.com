'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'production';

var express = require('express'),
    app = express(),
	fs = require('fs'),
	path = require('path'),
	http = require('http'),
	mongoose = require('mongoose'),
//	favicon = require('serve-favicon'),
	morgan = require('morgan'),
	compression = require('compression'),
	bodyParser = require('body-parser'),
	errorHandler = require('errorhandler');

var connection = 'mongodb+srv://application:Sup3rP0w3r@cluster0-d9i0y.gcp.mongodb.net/application?retryWrites=true&w=majority';

var httpServer = http.createServer(app);
httpServer.listen(8080);

app.use(compression());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

mongoose.connect(connection, { useNewUrlParser: true }).then();

app.use(express.static(__dirname + '/', {
	index: false
}));

app.use("/", express.static(__dirname + "/client", {
	index: false,
	redirect: false
}));

app.use('/api/product/list', require('./api/product/list/index.js'));
app.use('/api/product/view', require('./api/product/view/index.js'));
app.use('/api/purchase/transaction', require('./api/purchase/transaction/index.js'));

app.get('*', function(req, res) {
	res.sendFile(__dirname + '/client/index.html');
});
