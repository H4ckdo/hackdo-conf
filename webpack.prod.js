const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const BabiliPlugin = require('babili-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(common, {
  plugins: [
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.app\.scss$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true
    }),
    new BabiliPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
});
