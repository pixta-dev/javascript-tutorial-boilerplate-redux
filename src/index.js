import React from 'react';
import ReactDOM from 'react-dom';
import AddTodo from './components/AddTodo';
import Footer from './components/Footer';
import VisibleTodoList from './components/VisibleTodoList';

export default function TodoApp() {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
}

ReactDOM.render(<TodoApp />, document.getElementById('root'));
