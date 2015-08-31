var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

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
      {test: /\.(js|jsx)$/, loader: 'babel?stage=0', exclude: /node_modules/},
      {test: /\.(scss|css)$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]!postcss!sass')},
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.scss', '.css']
  },
  postcss: [
    require('autoprefixer-core'),
    require('postcss-color-rebeccapurple'),
  ],
  plugins: [
    new webpack.NoErrorsPlugin(),
    /**
     * The path relative to entry point file
     * ExtractTextPlugin's ability is that extract css from js to a separate css file.
    */
    new ExtractTextPlugin('../stylesheets/_application.css', { allChunks: true }),
  ]
};

module.exports = config;
