const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
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
        },
        {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
           fallback: 'style-loader',
           use: ['css-loader', 'sass-loader']
         })
        }
    ]},
  plugins: [
     new ExtractTextPlugin({filename: "style.css"}),
  ],
  optimization: {},
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.json', '.jsx', '.css'],
  },
};
