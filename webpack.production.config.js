const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = (env) => {
  entry: './src/index.js',
    output : {
      path: path.resolve(__dirname, './build'),
      filename: 'app.boundle.js'
  },
  mode: 'production',
  devtool: 'none',
  module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
 },
 plugins: [new HtmlWebpackPlugin({
    template: 'index.html',
    filename: 'index.html',
    inject: 'body'
  }),
  new webpack.DefinePlugin({
     'SERVICE_URL': JSON.stringify("/api"),
     'process.env.NODE_ENV': JSON.stringify(env.mode)
 })
]
};
