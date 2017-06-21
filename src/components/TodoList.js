import React from 'react';
import Todo from './Todo';

export default function TodoList({ todos, onTodoClick }) {
  return (
    <ul>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          completed={todo.completed}
          text={todo.text}
          onClick={() => onTodoClick(todo.id)}
        />,
      )}
    </ul>
  );
}
