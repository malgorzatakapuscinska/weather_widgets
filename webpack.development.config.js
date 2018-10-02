const path = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
    output : {
      path: path.resolve(__dirname, './build'),
      filename: 'app.boundle.js'
  },
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    port: 8080,
    open: true,
    proxy: {
      "/api": {target: "http://localhost:3000/api/",
                 secure: false
              }
    }
  },
  module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                  "babel-loader",
                ]
            }
        ]
 },
 plugins: [
  new webpack.HotModuleReplacementPlugin(),
  new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
      inject: 'body'
  })
  ]
};
