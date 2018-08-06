import _ from 'lodash';
import sayHi from './print';
import './styles.css';

function component() {
  let element = document.createElement('div');
  let btn = document.createElement('button');

  element.innerHTML = _.join(['hello', 'webpack'], ' ');
  btn.innerHTML = 'Greeting!';
  btn.onclick = sayHi;
  btn.classList.add('test-btn')

  element.appendChild(btn);

  return element;
}

// document.body.appendChild(component());
let element = component();
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept('./print', function() {
    console.log('accepting the updated sayHi module');
    // sayHi();
    document.body.removeChild(element);
    element = component();
    document.body.appendChild(element);
  })
}