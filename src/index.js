import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import todoApp from './reducers/todoApp';

const store = createStore(todoApp);

function render() {
  ReactDOM.render(<div />, document.getElementById('root'));
}

store.subscribe(render);

render();
