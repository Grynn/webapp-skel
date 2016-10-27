const webpack = require('webpack'); // eslint-disable-line import/no-extraneous-dependencies
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // eslint-disable-line import/no-extraneous-dependencies
const failPlugin = require('webpack-fail-plugin'); // eslint-disable-line import/no-extraneous-dependencies

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

module.exports = {
  entry: {
    app: './src/index.js',
    vendor: ['jquery', 'page', 'debug'],
  },
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]-[chunkhash].js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['babel'],
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file',
      },
      {
        test: /\.(woff|woff2)$/,
        loader: 'url?prefix=font/&limit=5000',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream',
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml',
      },
      {
        test: /\.gif/,
        loader: 'url-loader?limit=10000&mimetype=image/gif',
      },
      {
        test: /\.jpg/,
        loader: 'url-loader?limit=10000&mimetype=image/jpg',
      },
      {
        test: /\.png/,
        loader: 'url-loader?limit=10000&mimetype=image/png',
      },

    ],
  },
  devServer: {
    contentBase: './dist',
    noInfo: true, //  --no-info option
    inline: true,
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',

      // filename: "vendor.js"
      // (Give the chunk a different name)

      minChunks: Infinity,
      // (with more entries, this ensures that no other module
      //  goes into the vendor chunk)
    }),
    new webpack.EnvironmentPlugin([
      'NODE_ENV',
    ]),
    new HtmlWebpackPlugin(),
    failPlugin,
  ],
};
