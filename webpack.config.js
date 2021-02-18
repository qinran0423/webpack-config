const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TxtWebpackPlugin = require('./myPlugins/txt-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  entry : "./src/index.js",
  output: {
    // 绝对路径
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js'
  },
  devServer: {
    port: 8899,
    open: true,
    hot: true
  },
  resolveLoader: {
    modules: ['node_modules', './myLoaders']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    new CleanWebpackPlugin(),
    new TxtWebpackPlugin({
      name: 'haizol'
    }),
    new MiniCssExtractPlugin()
  ],
  mode: 'development'
}