const webpack = require('webpack');
const path = require('path');
const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  entry: {
    dashboard: './src/js/dashboard',
    user: './src/js/user',
    homepage: './src/js/homepage',
    event: './src/js/event',
  },
  output: {
    path: path.join(__dirname, "/build/js"),
    filename:"[name].bundle.js"
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, "./node_modules/foundation-sites/scss"),
      path.resolve(__dirname, "./node_modules/motion-ui"),
    ]
  },
  resolve: {
    modulesDirectories: ['node_modules']
  },
 externals: {
    jQuery: 'jQuery',
    foundation: 'Foundation'
  },
  module: {
    loaders:[
      {
        test:/\.jsx?$/,
        loader:'babel-loader',
        exclude: '/node_modules',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test:/\.scss?$/,
        loader: 'style-loader!css-loader!sass-loader',
      }
    ]
  },
  plugins: [
    new WebpackNotifierPlugin({alwaysNotify: true})
  ]
}
