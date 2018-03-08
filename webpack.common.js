const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
    './client/src/js/index.js',
    './client/src/styles/app.scss',
  ],
  output: {
    path: path.join(__dirname, "/client/public"),
    filename: "bundle.js",
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    mainFields: ["web", "browser", "style", "main"],
    alias: {
      anchors: path.resolve(__dirname, 'config/anchors/')
    } 
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              "presets": ["es2015", "react", "stage-2"],
              "babelrc": false,
              "plugins": [
                ["transform-decorators-legacy"],
                ["transform-runtime"],
                ["transform-object-rest-spread", { "useBuiltIns": true }]
              ]
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|woff|svg)$/,
        use: {
          loader: 'url-loader',
          query: 'limit=1000000000&mimetype=font/svg+xml&name=/[path][name].[ext]'
        }
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          publicPath: path.join(__dirname, "/dist"),
          use: ['css-loader', {
            loader: "sass-loader"
          }]
        })
      }
    ]
  },
  plugins:[
    new ExtractTextPlugin({
      filename: 'app.css',
      disable: false,
      allChunks: true,
      publicPath: path.join(__dirname, "/client/public"),
    })
  ]
}
