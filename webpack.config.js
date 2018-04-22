const webpack = require('webpack');
const path = require('path');
module.exports = {
  mode: 'development',
  entry: {
    app: './workspace/src/js/main.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  module: {
      rules: [{
        test: /\.js$/,
        include: path.join(__dirname),
        loader: 'babel-loader',
        exclude: /(node_modules)|(dist)/,
      }],
    },
  plugins: [],
  optimization: {},
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.json', '.jsx', '.css'],
  },
};
