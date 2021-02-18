const webpack = require('webpack')
const webpackConfig = require('./webpack.config')

const compiler = webpack(webpackConfig)

Object.keys(compiler.hooks).forEach((hookName) => {
  compiler.hooks[hookName].tap('hazol', () => {
    console.log(`run -------------》 ${hookName}`);
  })
})

compiler.run()
