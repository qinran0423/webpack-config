
module.exports = function(source) {
  return `const Tag = document.createElement('style');
    Tag.innerHTML = ${source};
    document.head.appendChild(Tag);
  `
}