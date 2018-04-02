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
      anchors: path.resolve(__dirname, 'config/anchors/'),
      images: path.resolve(__dirname, 'client/src/images/'),
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
        test: /\.(png|jpg|jpeg|gif|svg|webp)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png'
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: { minimize: true }
            },
            {
              loader: "sass-loader",
              options: { minimize: true }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'app.css',
      disable: false,
      allChunks: true,
      publicPath: path.join(__dirname, "/client/public"),
    })
  ]
}
