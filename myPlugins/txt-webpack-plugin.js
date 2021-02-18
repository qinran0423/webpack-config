class TxtWebpackPlugin {
  constructor(options) {
  }

  apply(compiler) {
    compiler.hooks.emit.tapAsync('TxtWebpackPlugin', (compilcation, cb) => {
      compilcation.assets['haizol.txt'] = {
        source: function() {
          return '你好，海智'
        },
        size: function() {
          return 1024
        }
      }
      cb()
    })
  }
}


module.exports = TxtWebpackPlugin