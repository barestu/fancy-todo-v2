import React from 'react';
import Todo from './components/Todo';
import { TodoSchema } from './types/schemas';

const todos: TodoSchema[] = [
  {
    id: 1,
    name: 'Learn React',
    completed: true,
    created_date: new Date(),
    completed_date: new Date(),
    due_date: new Date(),
  },
  {
    id: 2,
    name: 'Learn Vue',
    completed: true,
    created_date: new Date(),
    completed_date: new Date(),
    due_date: new Date(),
  },
  {
    id: 3,
    name: 'Learn Svelte',
    completed: false,
    created_date: new Date(),
    completed_date: null,
    due_date: new Date((new Date()).valueOf() + 1000*3600*24),
  },
  {
    id: 4,
    name: 'Learn Flutter',
    completed: false,
    created_date: new Date(),
    completed_date: null,
    due_date: new Date((new Date()).valueOf() + 1000*3600*48),
  },
  {
    id: 5,
    name: 'Learn Flutter',
    completed: false,
    created_date: new Date(),
    completed_date: null,
    due_date: new Date(),
  },
  {
    id: 6,
    name: 'Learn Flutter',
    completed: false,
    created_date: new Date(),
    completed_date: null,
    due_date: new Date((new Date()).valueOf() + 1000*3600*72),
  },
]

function App() {
  return (
    <div className="App">
      <Todo todos={todos} />
    </div>
  );
}

export default App;
