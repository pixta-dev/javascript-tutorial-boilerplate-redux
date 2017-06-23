import expect from 'expect';
import deepFreeze from 'deep-freeze';

function addCounter(list) {
  return [...list, 0];
}
function testAddCounter() {
  const listBefore = [];
  const listAfter = [0];

  deepFreeze(listBefore);

  expect(addCounter(listBefore)).toEqual(listAfter);
}

function removeCounter(list, index) {
  return [...list.slice(0, index), ...list.slice(index + 1)];
}
function testRemoveCounter() {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 20];

  deepFreeze(listBefore);

  expect(removeCounter(listBefore, 1)).toEqual(listAfter);
}

function incrementCounter(list, index) {
  return [...list.slice(0, index), list[index] + 1, ...list.slice(index + 1)];
}
function testIncrementCounter() {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 11, 20];

  deepFreeze(listBefore);

  expect(incrementCounter(listBefore, 1)).toEqual(listAfter);
}

testAddCounter();
testRemoveCounter();
testIncrementCounter();
console.log('[avoiding-array-mutations] all tests passed.');
