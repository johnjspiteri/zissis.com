module.exports = function(grunt) {
	grunt.registerTask('build-scripts', [
		// 'uglify',
		'express:server',
		'watch'
	]);
};