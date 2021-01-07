class TxtWebpackPlugin {
  constructor(options) {
    console.log(options);
  }
  apply(compiler) {
    compiler.hooks.emit.tapAsync('TxtWebpackPlugin',(compilation,cb) => {
      compilation.assets['randy.txt'] = {
        source: function() {
          return '哈哈哈'
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