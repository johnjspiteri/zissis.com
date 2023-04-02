'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'production';

var connection = '',
	express = require('express'),
    app = express(),
	path = require('path'),
	http = require('http'),
	mongoose = require('mongoose'),
//	favicon = require('serve-favicon'),
	morgan = require('morgan'),
	compression = require('compression'),
	bodyParser = require('body-parser'),
	errorHandler = require('errorhandler');

// connection = 'mongodb://127.0.0.1:27017/zissis';
connection = 'mongodb+srv://application:Sup3rP0w3r@cluster0-d9i0y.gcp.mongodb.net/application?retryWrites=true&w=majority';
var location = require('./development.json');
var httpDevelopmentServer = http.createServer(app);
httpDevelopmentServer.listen(location.port.http);

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

app.use(morgan('dev'));
app.use(errorHandler());
app.get('*', function(req, res) {
	res.sendFile(__dirname + '/client/development.html');
});
