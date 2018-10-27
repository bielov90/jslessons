'use strict';

let path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist/js'
  },
  mode: 'development'
};