var path = require('path');
var webpack = require('webpack');

var config = {
  context: __dirname + '/app/assets/javascripts',
  entry: [
    './_application.js'
  ],
  output: {
    filename: '[name].bundle.js',
    path: __dirname + '/app/assets/javascripts',
  },
  externals: {
    jquery: 'var jQuery'
  },
  devtool: '#eval-source-map',
  module: {
    loaders: [
      {test: /\.(js|jsx)$/, loader: 'babel?stage=0', exclude: /node_modules/}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
  ]
};

module.exports = config;
