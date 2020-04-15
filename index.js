import number from './a';
import b from './b';
import './index.css'
import './common.scss'
import timg from './img/timg.jpg'
import axios from 'axios';
var img = new Image();
img.src = timg;
img.classList.add('timg')
var root = document.querySelector('#root');
root.append(img);
number();
b();


let a = [1, 2, 3];
a.map((val, key) => {

})
// axios.get('/api/info').then((res) => {
//   console.log(res)
// })
