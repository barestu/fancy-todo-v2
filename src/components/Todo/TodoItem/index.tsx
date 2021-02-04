import React, { useContext } from 'react';
import { format, isToday, isTomorrow } from 'date-fns';
import { FaCheck, FaChevronRight } from 'react-icons/fa';
import { TodoSchema } from '../../../types/schemas';
import { TodoContext } from '../../../context/todos';
import { theme } from '../../../themes/theme';
import {
  Container,
  DueDate,
  IconContainer,
  IconButton,
  Name,
  ShowMore,
} from './styles/TodoItem';
import { ActionType } from '../../../context/todos/types';

interface TodoItemProps {
  todo: TodoSchema;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { dispatch } = useContext(TodoContext);

  const getIndicatorColor = () => {
    if (todo.due_date) {
      if (isToday(todo.due_date)) {
        return theme.colors.secondary;
      } else if (isTomorrow(todo.due_date)) {
        return '#7A8CA6';
      }
    }
    return '#E1E1E1';
  }

  const getDueDate = () => {
    if (!todo.due_date) {
      return '-';
    } else if (isToday(todo.due_date)) {
      return 'Today';
    } else if (isTomorrow(todo.due_date)) {
      return 'Tomorrow';
    } else {
      return format(todo.due_date, 'dd/MM/yyyy');
    }
  }

  const setCompleted = () => {
    const payload: TodoSchema = {
      ...todo,
      completed: true,
      completed_date: new Date(),
    };

    dispatch({ type: ActionType.UPDATE, payload });
  };

  return (
    <Container>
      <IconContainer indicatorColor={getIndicatorColor()}>
        <IconButton isCompleted={todo.completed} onClick={setCompleted}>
          <FaCheck />
        </IconButton>
      </IconContainer>
      <Name isCompleted={todo.completed}>{todo.name}</Name>
      {!todo.completed && (
        <>
          <DueDate bold={todo.due_date && isToday(todo.due_date)}>
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
