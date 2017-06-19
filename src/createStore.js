export default function createStore(reducer) {
  let state;
  let listeners = [];

  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  }

  function subscribe(listener) {
    listeners.push(listener);

    return function() {
      listeners = listeners.filter(l => l !== listener);
    };
  }

  dispatch({});

  return { getState, dispatch, subscribe };
}
