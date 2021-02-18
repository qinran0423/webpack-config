
// function getComponent() {
//   return import(/*webpackChunkName: 'lodash'*/'lodash').then(({ default: _ }) => {
//     var element = document.createElement('div');
//     element.innerHTML = _.join(['Dell', 'Lee'], '-');
//     return element
//   })
// }
// document.addEventListener('click', () => {
//   getComponent().then(element => {
//     document.body.appendChild(element);
//   })

// })


// import common from  './common.scss'
function render() { 
  div = document.createElement('div') 
  div.innerHTML = 'Hello World01111'; 
  document.body.appendChild(div) 
} 
console.log('aaa1');
render() 