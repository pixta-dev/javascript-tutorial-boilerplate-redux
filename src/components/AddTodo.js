import React from 'react';

export default function AddTodo({ onAddClick }) {
  let input;

  return (
    <div>
      <input
        ref={node => {
          input = node;
        }}
      />
      <button
        onClick={() => {
          onAddClick(input.value);
          input.value = '';
        }}
      >
        Add Todo
      </button>
    </div>
  );
}
