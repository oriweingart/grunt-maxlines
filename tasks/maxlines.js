/*
 * grunt-maxlines
 * https://github.com/zerok/grunt-maxlines
 *
 * Copyright (c) 2014 Horst Gutmann
 * Licensed under a GPLv3 license.
 */

'use strict';

var sloc = require('sloc'),
    path = require('path');

module.exports = function(grunt) {
  var supportedExtensions = ['js', 'py', 'coffee', 'scss', 'css', 'go', 'php',
                             'go', 'java', 'html'];
  var supportedMetrics = ['loc', 'sloc', 'cloc', 'scloc', 'mcloc', 'nloc'];

  grunt.registerMultiTask('maxlines', 'Enforce a maximum number of lines for your source files.', function() {
    var options = this.options({
      metric: 'sloc',
      limit: 500
    });

    if (supportedMetrics.indexOf(options.metric) === -1) {
      grunt.fail.error("Unsupported metric specified: " + options.metric);
      return;
    }

    var failed = false;

    // Iterate over all specified file groups.
    var src = this.filesSrc.filter(function(filepath) {
      // Skip missing files
      if (!grunt.file.exists(filepath)) {
        grunt.log.warn('Source file "' + filepath + '" not found.');
        return false;
      }
      // Skip files that are not supported.
      var ext = getExt(filepath);
      if (supportedExtensions.indexOf(ext) === -1) {
        return false;
      }
      return true;
    });
      
    src.forEach(function(filepath) {
      var data = grunt.file.read(filepath);
      var ext = getExt(filepath);
      var numLines = sloc(data, ext)[options.metric];

      if (numLines > options.limit) {
        grunt.log.writeln(filepath + ": " + numLines + " > " + options.limit);
        failed = true;
      }
    });

    if (failed) {
      grunt.log.warn();
    }
  });

  function getExt(filename) {
    return path.extname(filename).replace(/\./, '');
  }
};
