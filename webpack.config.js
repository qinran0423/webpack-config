const path = require('path');
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
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['hzol-style-loader', 'hzol-css-loader', 'hzol-less-loader']
      },
      {
        test: /\.js$/,
        use: {
          loader: 'replaceLoader',
          options: {
            name: 'randy'
          }
        }
      }
    ]
  },
  mode: 'development'
}