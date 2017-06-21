import React from 'react';
import ReactDOM from 'react-dom';
import AddTodo from './components/AddTodo';
import Footer from './components/Footer';
import VisibleTodoList from './components/VisibleTodoList';
import store from './store';

export default function TodoApp() {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
}

function render() {
  ReactDOM.render(
    <TodoApp {...store.getState()} />,
    document.getElementById('root'),
  );
}

store.subscribe(render);

render();
