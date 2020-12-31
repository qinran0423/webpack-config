// 自定义loader
// loader 就是一个函数，不可以是箭头函数
// loader必须有返回值

module.exports = function(source) {
  console.log(this, this.query);
  const content = source.replace('hello', 'hahhaha')
  this.callback(null, content)
  // return source.replace('hello', '你好')
}