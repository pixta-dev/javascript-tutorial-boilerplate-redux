import expect from 'expect';
import deepFreeze from 'deep-freeze';

function addCounter(list) {
  list.push(0);
  return list;
}
function testAddCounter() {
  const listBefore = [];
  const listAfter = [0];

  deepFreeze(listBefore);

  expect(addCounter(listBefore)).toEqual(listAfter);
}

testAddCounter();
console.log('[avoiding-array-mutations]: all tests passed!');
