const merge = require('webpack-merge');
const webpackcommon = require('./webpack.common');
const webpack = require('webpack');
module.exports = merge(webpackcommon, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: './dist',
    open: true,
    port: '8899',
    hot: true,
    proxy: {
      "/api": {
        target: 'http://localhost:9092'
      }
    }
  }
})
