import React from 'react';
import Todo from './components/Todo';
import { TodoProvider } from './context/todos';

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <Todo />
      </TodoProvider>
    </div>
  );
}

export default App;
