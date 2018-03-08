const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const BabiliPlugin = require('babili-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(common, {
  plugins: [
    new BabiliPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
});