'use strict';

var grunt = require('grunt');

module.exports = {
  manifest: {
    pkg: grunt.file.readJSON('package.json')
  },
  server: require('./task/server.js')
};