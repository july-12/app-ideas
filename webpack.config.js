const path = require('path')

module.exports = {
  entry: "./src/index.jsx",

  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 9000
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js'
  },

  module: {
    rules: [
      { test: /\.jsx$/, use: 'babel-loader'}
    ]
  }
}
