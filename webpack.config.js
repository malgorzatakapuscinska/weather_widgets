const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/index.js',
    output : {
      path: path.resolve(__dirname, './build'),
      filename: 'app.boundle.js'
  },
  devtool: 'eval-source-map',
  module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader"
            }
        ]
 },
 plugins: [new HtmlWebpackPlugin({
    template: 'index.html',
    filename: 'index.html',
    inject: 'body'
  })]
};
