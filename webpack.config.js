const path = require('path');

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
    alias: {
      d3: require.resolve("d3/index")
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a valid name to reference
        query: {
          presets: [
            ["es2015", { "modules": false }]
          ]
        }
      }
    ]
  }
};
