module.exports = function(grunt) {

	var path = require('path');
	var development = grunt.file.readJSON('development.json');

	require('time-grunt')(grunt);
	require('load-grunt-config')(grunt, {
		configPath: path.join(process.cwd(), 'build/config'),
		data: {
			ip: development.ip,
			port: development.port
		},
		jitGrunt: {
			customTasksDir: 'build/tasks',
			staticMappings: {
				express: 'grunt-express-server',
				ngtemplates: 'grunt-angular-templates'
			}
		}
	});
};
