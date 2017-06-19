import expect from 'expect';
import './index.css';

function counter(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
  }
}

expect(counter(0, { type: 'INCREMENT' })).toEqual(1);
expect(counter(1, { type: 'INCREMENT' })).toEqual(2);
console.log('all test passed!');
