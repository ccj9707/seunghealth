const webpack = require('webpack');
const path = require('path');
module.exports = {
  mode: 'development',
  entry: {
    app: ['./workspace/src/js/creative.js']
  },
  output: {
    path: path.resolve(__dirname, 'workspace/dist'),
    publicPath: './workspace/dist/',
    filename: 'bundle.js'
  },
  module: {
      rules: [{
        test: /\.js$/,
        include: path.join(__dirname),
        loader: 'babel-loader',
        exclude: /(node_modules)|(dist)/,
        }
    ]},
  optimization: {},
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.json', '.jsx', '.css'],
  },
};
