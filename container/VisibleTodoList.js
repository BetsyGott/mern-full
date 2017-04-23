import {connect} from 'react-redux';
import {toggleTodo} from '../actions';
import ToDoList from '../client/ToDoList';

const getVisibleTodos = ( todos, filter )=> {
    switch(filter){
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
      todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
};

const matchDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id)=>{
            dispatch(toggleTodo);
        }
    }
};

const VisibleTodoList = connect(
  mapStateToProps,
    matchDispatchToProps
)(ToDoList);

export default VisibleTodoList;