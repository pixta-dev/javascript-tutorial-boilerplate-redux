import React from 'react';
import ReactDOM from 'react-dom';
import AddTodo from './components/AddTodo';
import Footer from './components/Footer';
import VisibleTodoList from './components/VisibleTodoList';
import { createStore } from 'redux';
import todoApp from './reducers/todoApp';

export default function TodoApp({ store }) {
  return (
    <div>
      <AddTodo store={store} />
      <VisibleTodoList store={store} />
      <Footer store={store} />
    </div>
  );
}
ReactDOM.render(
  <TodoApp store={createStore(todoApp)} />,
  document.getElementById('root'),
);
