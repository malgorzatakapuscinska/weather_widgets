module.exports = {
  entry: './src/index.js',
    output : {
      path: path.resolve(__dirname, 'build'),
      filename: 'app.bundle.js'
  }
  module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader"
            }
        ]
    }
};
