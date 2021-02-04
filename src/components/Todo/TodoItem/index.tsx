import React from 'react';
import { format, isToday, isTomorrow } from 'date-fns';
import { FaCheck, FaChevronRight } from 'react-icons/fa';
import { TodoSchema } from '../../../types/schemas';
import {
  Container,
  DueDate,
  IconContainer,
  IconButton,
  Name,
  ShowMore,
} from './styles/TodoItem';
import { theme } from '../../../themes/theme';

interface TodoItemProps {
  todo: TodoSchema;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const getIndicatorColor = () => {
    if (todo.completed) {
      return '#E1E1E1';
    } else if (isToday(todo.due_date)) {
      return theme.colors.secondary;
    } else if (isTomorrow(todo.due_date)) {
      return '#7A8CA6';
    } else {
      return '#E1E1E1';
    }
  }

  const getDueDate = () => {
    if (isToday(todo.due_date)) {
      return 'Today';
    } else if (isTomorrow(todo.due_date)) {
      return 'Tomorrow';
    } else {
      return format(todo.due_date, 'dd/MM/yyyy');
    }
  }

  return (
    <Container>
      <IconContainer indicatorColor={getIndicatorColor()}>
        <IconButton isCompleted={todo.completed}>
          <FaCheck />
        </IconButton>
      </IconContainer>
      <Name>{todo.name}</Name>
      {!todo.completed && (
        <>
          <DueDate bold={isToday(todo.due_date)}>
            {getDueDate()}
          </DueDate>
          <ShowMore>
            <FaChevronRight color="#B9CAE0" />
          </ShowMore>
        </>
      )}
    </Container>
  );
};

export default TodoItem;
