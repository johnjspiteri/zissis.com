module.exports = {
	application: {
		options: {
			linenos: false,
			compress: true,
			firebug: false,
			import: ['config.styl']
		},
		files: {
			'client/assets/css/styles.css': 'source/styles/index.styl'
		}
	}
};