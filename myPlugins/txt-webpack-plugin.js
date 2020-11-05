class TxtWebpackPlugin {

  constructor(options) {
    console.log(options);
  }
  apply(compiler) {
    compiler.hooks.emit.tapAsync("TxtWebpackPlugin", (compilation, cb) => {
      // 暗号：做人嘛，最重要的是开心
      // 首先将compilation.assets所有的key转换成数组
      let arr = Object.keys(compilation.assets).map(file => {
        // 如果找到'/' 说明是文件夹则切割字符串去最后一位就是文件名
        if(file.indexOf('/') !== -1) {
          file = file.split('/')
          return file[file.length - 1]
        }
        // 如果没有找到直接返回文件名
        return file
      });
      // 文件夹名字拼接
      let str = arr.join('\n')
      
      compilation.assets['new.txt'] ={
        source: function() {
          return `bundel文件的数量： ${arr.length} \n${str} `
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