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
    filename:"[name].bundle.js",
  },
  devtool: 'source-map',
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, "./node_modules/foundation-sites/scss"),
      path.resolve(__dirname, "./node_modules/motion-ui"),
    ]
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js'],
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
    new WebpackNotifierPlugin({alwaysNotify: true}),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
  ]
}
