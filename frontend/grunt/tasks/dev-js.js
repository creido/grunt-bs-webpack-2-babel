module.exports = function(grunt) {

    grunt.registerTask('dev-js', [
        'js-lint',
        'modernizr'
    ]);
};
