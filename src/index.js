import { createStore } from 'redux';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import todoApp from './reducers/todoApp';

const store = createStore(todoApp);

let nextTodoId = 0;
export default class TodoApp extends Component {
  render() {
    return (
      <div>
        <input
          ref={node => {
            this.input = node;
          }}
        />
        <button
          onClick={() => {
            store.dispatch({
              type: 'ADD_TODO',
              text: this.input.value,
              id: nextTodoId++,
            });

            this.input.value = '';
          }}
        >
          Add Todo
        </button>
        <ul>
          {this.props.todos.map(todo => <li key={todo.id}>{todo.text}</li>)}
        </ul>
      </div>
    );
  }
}

function render() {
  ReactDOM.render(
    <TodoApp todos={store.getState().todos} />,
    document.getElementById('root'),
  );
}

store.subscribe(render);

render();
