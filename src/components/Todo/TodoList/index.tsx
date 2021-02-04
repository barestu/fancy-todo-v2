import React from 'react';
import { sortBy } from 'lodash';
import { TodoSchema } from '../../../types/schemas';
import TodoItem from '../TodoItem';
import {
  Container,
  Head,
  Title,
  DueDate,
  List,
  NotFound,
  NotFoundText,
} from './styles/TodoList';

interface TodoListProps {
  title: string;
  showDueDate?: boolean;
  notFoundMsg?: string;
  todos: TodoSchema[];
}

const TodoList = ({
  title,
  showDueDate = false,
  notFoundMsg = 'No Data',
  todos
}: TodoListProps) => {
  return (
    <Container>
      <Head>
        <Title>{title}</Title>
        {showDueDate && <DueDate>DUE DATE</DueDate>}
      </Head>
      {todos.length ? (
        <List>
          {sortBy(todos, 'due_date').map(todo => <TodoItem key={`${title}-${todo.id}`} todo={todo} />)}
        </List>
      ) : (
        <NotFound>
          <NotFoundText>{notFoundMsg}</NotFoundText>
        </NotFound>
      )}
    </Container>
  );
};

export default TodoList;
