module.exports = {
	options: {
		livereload: true
	},
	partials: {
		files: 'source/partials/**/*.pug',
		tasks: 'build-partials'
	},
	scripts: {
		files: [
			'!client/assets/scripts/app.min.js',
			'!node_modules/**',
			'api/**',
			'build/**',
			'source/scripts/**',
			'data/**',
			'model/**',
			'gruntfile.js',
			'server.js'
		],
		tasks: 'build-scripts',
		options: {
			spawn: false
		}
	},
	styles: {
		files: 'source/styles/**/*.styl',
		tasks: 'build-styles',
		options: {
			livereload: true
		}
	},
	gruntfile: {
		files: ['gruntfile.js']
	}
};
