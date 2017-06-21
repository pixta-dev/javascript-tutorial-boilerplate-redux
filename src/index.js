import { createStore } from 'redux';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AddTodo from './components/AddTodo';
import Footer from './components/Footer';
import TodoList from './components/TodoList';
import todoApp from './reducers/todoApp';

const store = createStore(todoApp);

let nextTodoId = 0;

function getVisibleTodos(todos, filter) {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
  }
}

export default class TodoApp extends Component {
  render() {
    const { todos, visibilityFilter } = this.props;
    const visibleTodos = getVisibleTodos(todos, visibilityFilter);

    return (
      <div>
        <AddTodo
          onAddClick={text => {
            store.dispatch({
              type: 'ADD_TODO',
              text,
              id: nextTodoId++,
            });
          }}
        />
        <TodoList
          todos={visibleTodos}
          onTodoClick={id => {
            store.dispatch({
              type: 'TOGGLE_TODO',
              id,
            });
          }}
        />
        <Footer
          visibilityFilter={visibilityFilter}
          onFilterClick={filter => {
            store.dispatch({
              type: 'SET_VISIBILITY_FILTER',
              filter,
            });
          }}
        />
      </div>
    );
  }
}

function render() {
  ReactDOM.render(
    <TodoApp {...store.getState()} />,
    document.getElementById('root'),
  );
}

store.subscribe(render);

render();
