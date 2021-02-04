import { ReactNode } from 'react';
import { TodoSchema } from '../../types/schemas';

export enum ActionType {
  FETCH = 'TODO/FETCH',
  FETCH_SUCCESS = 'TODO/FETCH_SUCCESS',
  FETCH_FAILED = 'TODO/FETCH_FAILED',
  CREATE = 'TODO/CREATE',
  UPDATE = 'TODO/UPDATE',
  DELETE = 'TODO/DELETE',
}

export interface TodoState {
  status: string;
  todos: TodoSchema[];
}

export type TodoAction =
  | { type: ActionType.FETCH }
  | { type: ActionType.FETCH_SUCCESS, payload: TodoSchema[] }
  | { type: ActionType.FETCH_FAILED, error: string }
  | { type: ActionType.CREATE, payload: TodoSchema }
  | { type: ActionType.UPDATE, payload: TodoSchema }
  | { type: ActionType.DELETE, id: number };

export interface TodoProviderProps {
  children: ReactNode;
}
