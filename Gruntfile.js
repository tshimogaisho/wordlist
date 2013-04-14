module.exports = function (grunt) {

  grunt.initConfig({
    jshint: {
      files: [
        'Gruntfile.js',
        'routes/**/*.js',
        'package.json',
        'test/**/*.js',
        '*.js',
        'public/javascripts/app/*.js',
        '.jshintrc'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    csslint: {
      strict: {
        options: {
          import: 2
        },
        src: []
      },
      lax: {
        options: {
          import: false
        },
        src: []
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.registerTask('build', ['jshint', 'csslint']);

};