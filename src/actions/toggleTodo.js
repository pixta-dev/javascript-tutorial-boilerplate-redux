export default function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    id,
  };
}
