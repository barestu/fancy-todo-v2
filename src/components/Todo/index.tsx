import React, { useContext, useEffect, useState } from 'react';
import { FaChevronDown, FaPlus, FaChevronUp } from 'react-icons/fa';
import {
  Container,
  Head,
  HeadTitle,
  ToggleShow,
  ToggleShowText,
  CreateButton,
  Content,
} from './styles/Todo';
import TodoList from './TodoList';
import { TodoContext } from '../../context/todos';
import ModalCreate from '../ModalCreate/ModalCreate';

const Todo = () => {
  const [showMore, setShowMore] = useState(true);
  const [showModalCreate, setShowModalCreate] = useState(false);
  const { state } = useContext(TodoContext);
  const activeTodos = state.todos.filter(todo => !todo.completed);
  const completedTodos = state.todos.filter(todo => todo.completed);

  const handler = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      setShowModalCreate(true);
    } else if (e.key === 'Escape') {
      setShowModalCreate(false);
    }
  };

  useEffect(() => {
    console.log('here');
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  const onCreate = () => {
    setShowModalCreate(true);
  };

  return (
    <Container>
      <Head>
        <HeadTitle>FANCY TODO V2</HeadTitle>
        <ToggleShow onClick={() => setShowMore(!showMore)}>
          <ToggleShowText>{showMore ? 'show less' : 'show more'}</ToggleShowText>
          {showMore ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
        </ToggleShow>
      </Head>

      <Content showMore={showMore}>
        <TodoList
          title="Tasks"
          notFoundMsg="Currently you don't have any tasks."
          todos={activeTodos}
          showDueDate
        />

        {!!(activeTodos.length || completedTodos.length) && (
          <TodoList
            title="Done"
            notFoundMsg="Complete your tasks and it will appear here."
            todos={completedTodos}
          />
        )}
      </Content>

      <CreateButton onClick={onCreate}>
        <FaPlus color="#ffffff" />
      </CreateButton>

      <ModalCreate
        show={showModalCreate}
        onClose={() => setShowModalCreate(false)}
        onCreate={() => setShowMore(true)}
      />
    </Container>
  );
};

export default Todo;
