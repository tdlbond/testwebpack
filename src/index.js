import _ from 'lodash';
import './style.css';
import img from './haha.jpg';
function component() {
  let element = document.createElement('div');
  element.innerHTML = _.join(['hello', 'webpack'], ' ');
  element.classList.add('hello');
  let pic = new Image();
  pic.src = img;
  element.appendChild(pic);
  return element;
}

document.body.appendChild(component());