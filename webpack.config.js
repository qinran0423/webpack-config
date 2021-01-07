const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack')

const TxtWebpackPlugin = require('./myPlugin/txt-webpack-plugin')

module.exports = {
  entry : "./src/index.js",
  output: {
    // 绝对路径
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js'
  },
  resolveLoader: {
    modules: ['node_modules',  './myLoaders']
  },
  devServer: {
    contentBase: './dist',
    // open: true,
    port: 8899,
    hot: true,
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
      {
        test: /\.js$/,
        use: {
          loader: 'replaceLoader',
          options: {
            name: 'randy'
          }
        }
      },
      {
        test: /\.(gif|png|jpe?g)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: "[name].[ext]",
            outputPath:"images/",
            publicPath: '../images'
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    }),
    new TxtWebpackPlugin({
      name: 'randy'
    })
  ],
  mode: 'development'
}