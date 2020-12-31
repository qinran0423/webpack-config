const less = require('less')


module.exports = function(source) {
  less.render(source, (e, output) => {
    const {css} = output
    this.callback(e, css)
  })
}