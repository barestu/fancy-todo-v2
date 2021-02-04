import { createContext, useReducer } from 'react';
import { TodoAction, TodoProviderProps, TodoState } from './types';
import todoReducer from './reducer';

const initialState: TodoState = {
  status: '',
  todos: [],
};

export const TodoContext = createContext({
  state: initialState,
  dispatch: (_: TodoAction) => {},
});

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return <TodoContext.Provider value={{ state, dispatch }}>{children}</TodoContext.Provider>;
};
