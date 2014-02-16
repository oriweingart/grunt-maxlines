/*
 * grunt-maxlines
 * https://github.com/zerok/grunt-maxlines
 *
 * Copyright (c) 2014 Horst Gutmann
 * Licensed under the GPL v3 license.
 */
'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js'
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    maxlines: {
      options: {
        metric: 'sloc',
        limit: 200
      },
      js: {
        'src': ['tasks/*.js']
      }
    }

  });

  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('default', ['test']);

};
