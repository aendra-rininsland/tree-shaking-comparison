const path = require('path');
const webpack = require('webpack');

module.exports = {
  // devtool: isProd ? 'hidden-source-map' : 'cheap-eval-source-map',
  // context: path.join(__dirname, './client'),
  entry: {
    js: './index.js',
    // vendor: ['react']
  },
  output: {
    filename: 'webpack-bundle.js'
  },
  resolve: {
    mainFields: ['module', 'main']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader', // 'babel-loader' is also a valid name to reference
        query: {
          presets: [
            ["es2015", { "modules": false }]
          ]
        }
      }
    ]
  }
};
