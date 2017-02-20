var webpack = require('webpack');
var path = require('path');

var config = {
  entry:  path.join(__dirname, './components/App.jsx'),
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: path.join(__dirname, './components'),
        loader: 'babel-loader'
      }
    ]
  }
}

module.exports = config;