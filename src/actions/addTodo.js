let nextTodoId = 0;

export default function addTodo(text) {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text,
  };
}
