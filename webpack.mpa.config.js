const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const glob = require('glob');

// 暗号：等价交换，炼金术不变的原则
const setupMpa = () => {
  const entry = {},
    htmlPlugins = []
  const entryPaths = glob.sync(path.join(__dirname, './src/*/index.js'))
  entryPaths.forEach((item, index) => {
    const path = item;
    const match = path.match(/src\/(.*)\/index\.js$/);
    const pageName = match[1];
    entry[pageName] = path;
    htmlPlugins.push(
      new HtmlWebpackPlugin({
        template: `./src/${pageName}/index.html`,
        filename: `${pageName}.html`,
        chunks: [pageName]
      })
    )
  })
  return {
    entry,
    htmlPlugins
  }
}

const {entry, htmlPlugins} = setupMpa()

module.exports = {
  entry,
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
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
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.less$/,
        use: ['ran-style-loader', 'ran-css-loader', 'ran-less-loader']
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        }
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
    ...htmlPlugins,
    new CleanWebpackPlugin()
  ]
};

// time： 46