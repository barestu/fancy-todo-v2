import { TodoState, TodoAction, ActionType } from './types';

const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
  switch (action.type) {
    case ActionType.CREATE:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case ActionType.UPDATE: {
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload.id) {
            return action.payload;
          }
          return todo;
        }),
      };
    }
    case ActionType.DELETE: {
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id),
      };
    }
    default:
      return state;
  }
};

export default todoReducer;
