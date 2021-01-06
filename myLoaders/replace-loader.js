

module.exports = function(source) {
  console.log(this.query);
  return source.replace('hello', '你好')
}