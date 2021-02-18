const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const txtWebpackPlugin = require('../myPlugins/txt-webpack-plugin')
const MiniCssExtractPlugin  = require('mini-css-extract-plugin')
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js'
  },
  resolveLoader: {
    modules: ["node_modules", "./myloaders"],
  },
  resolve:{
    extensions: ['.js','.json']
  } ,  
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            // name：打包前模块的名称， ext：打包前的模块格式
            name: '[name]_[hash].[ext]',
            outputPath: 'images/',
            limit: 2048
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader?cacheDirectory',
        },
        inclueds: path.resolve(__dirname, 'src')
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      // cacheGroups: {
      //   defaultVendors: {
      //     test: /[\\/]node_modules[\\/]/,
      //     priority: -10
      //   },
      //   default: {
      //     minChunks: 2,
      //     priority: -20,
      //     reuseExistingChunk: true
      //   }
      // }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin (),
    new txtWebpackPlugin({
      name: 'randy'
    })
  ]
};

// time： 46