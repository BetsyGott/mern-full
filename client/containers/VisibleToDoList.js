import {connect} from 'react-redux';
import {toggleToDo, deleteToDo} from '../actions';
import ToDoList from '../components/ToDoList';

const getVisibleToDos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    default:
      return todos;
  }
};

const mapStateToProps = (state) => {
  return {
    todos: getVisibleToDos(state.todos, state.visibilityFilter)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleToDo(id))
    },
    onDeleteClick: (id) => {
      dispatch(deleteToDo(id))
    },
  };
};

const VisibleToDoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList);

export default VisibleToDoList;