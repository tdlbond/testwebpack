import _ from 'lodash';
import sayHi from './print';

function component() {
  let element = document.createElement('div');
  let btn = document.createElement('button');

  element.innerHTML = _.join(['hello', 'webpack'], ' ');
  btn.innerHTML = 'Greeting!';
  btn.onclick = sayHi;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());