const merge = require('webpack-merge');
const webpackcommon = require('./webpack.common');

module.exports = merge(webpackcommon, {
  mode: 'production',
  devtool: 'cheap-module-source-map',
});
