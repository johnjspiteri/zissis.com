module.exports = function(grunt) {
    grunt.registerTask('build-website', ['newer:puglint', 'newer:pug:website']);
};
