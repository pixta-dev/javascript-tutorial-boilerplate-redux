import expect from 'expect';
import { createStore } from 'redux';
import './index.css';

function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

expect(counter(0, { type: 'INCREMENT' })).toEqual(1);
expect(counter(1, { type: 'INCREMENT' })).toEqual(2);
expect(counter(2, { type: 'DECREMENT' })).toEqual(1);
expect(counter(1, { type: 'UNKNOWN' })).toEqual(1);
expect(counter(undefined, {})).toEqual(0);
console.log('all test passed!');

const store = createStore(counter);

function render() {
  document.body.innerText = store.getState();
}

function onClick() {
  store.dispatch({ type: 'INCREMENT' });
}

store.subscribe(render);

document.addEventListener('click', onClick);

render();
