import React from 'react';
import { FaChevronDown, FaPlus } from 'react-icons/fa';
import {
  Container,
  Head,
  HeadTitle,
  ToggleShow,
  ToggleShowText,
  CreateButton
} from './styles/Todo';
import TodoList from './TodoList';
import { TodoSchema } from '../../types/schemas';

interface TodoProps {
  todos: TodoSchema[];
}

const Todo = ({ todos }: TodoProps) => {
  const activeTodos = todos.filter(todo => !todo.completed);
  const completedTodos = todos.filter(todo => todo.completed);

  return (
    <Container>
      <Head>
        <HeadTitle>TITLE OF THE LIST</HeadTitle>
        <ToggleShow>
          <ToggleShowText>show less</ToggleShowText>
          <FaChevronDown size={12} />
        </ToggleShow>
      </Head>

      <TodoList
        title="Tasks"
        notFoundMsg="Currently you don't have any tasks."
        todos={activeTodos}
        showDueDate
      />

      <TodoList
        title="Done"
        notFoundMsg="Complete your tasks and it will appear here."
        todos={completedTodos}
      />

      <CreateButton>
        <FaPlus color="#ffffff" />
      </CreateButton>
    </Container>
  );
};

export default Todo;
