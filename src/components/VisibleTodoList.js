import { connect } from 'react-redux';
import TodoList from './TodoList';

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

function mapStateToProps({ todos, visibilityFilter }) {
  return {
    todos: getVisibleTodos(todos, visibilityFilter),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onTodoClick: id => {
      dispatch({
        type: 'TOGGLE_TODO',
        id,
      });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
