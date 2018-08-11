const path = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/index.js',
    output : {
      path: path.resolve(__dirname, './build'),
      filename: 'app.boundle.js'
  },
  mode: 'production',
  devtool: 'eval-source-map',
  module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: ["babel-loader"]
            }
        ]
 },
 plugins: [
  new webpack.HotModuleReplacementPlugin(),
  new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
      inject: 'body'
  }),
   new webpack.DefinePlugin({
      'SERVICE_URL': JSON.stringify("http/localhost:3000/api"),
  })
  ]
};
