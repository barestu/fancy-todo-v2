import React, {
  MutableRefObject,
  RefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { MdClose } from 'react-icons/md';
import DatePicker from 'react-datepicker';
import { TodoContext } from '../../context/todos';
import { ActionType } from '../../context/todos/types';
import { TodoSchema } from '../../types/schemas';
import { useOnClickOutside } from '../../utils/hooks/useOnClickOutside';
import Button from '../Base/Button/Button';
import Input from '../Base/Input';
import Modal from '../Base/Modal';
import { Wrapper, Content, Head, Title, Close, Body } from './styles/ModalCreate';
import 'react-datepicker/dist/react-datepicker.css';

interface ModalCreateProps {
  show: boolean;
  onClose: () => void;
  onCreate?: () => void;
}

const ModalCreate = ({
  show,
  onClose,
  onCreate = () => {},
}: ModalCreateProps) => {
  const modalContent = useRef() as RefObject<HTMLDivElement>;
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;
  const { dispatch } = useContext(TodoContext);
  const [name, setName] = useState('');
  const [dueDate, setDueDate] = useState<Date | null>(null);

  useOnClickOutside(modalContent, () => {
    onClose();
  });

  useEffect(() => {
    if (show) {
      inputRef.current.focus();
    };
    clearForm();
  }, [show]);

  const clearForm = () => {
    setName('');
    setDueDate(null);
  };

  const handleSubmit = () => {
    const payload: TodoSchema = {
      id: Date.now(),
      name,
      completed: false,
      created_date: new Date(),
      completed_date: null,
      due_date: dueDate,
    };
    dispatch({ type: ActionType.CREATE, payload });
    onClose();
    onCreate();
  };

  if (!show) {
    return null;
  }

  return (
    <Modal>
      <Wrapper>
        <Content ref={modalContent}>
          <Head>
            <Title>Create</Title>
            <Close onClick={onClose}>
              <MdClose color="#333" size={24} />
            </Close>
          </Head>

          <Body>
            <form onSubmit={handleSubmit}>
              <Input
                ref={inputRef}
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Task name"
              />
              <DatePicker
                selected={dueDate}
                onChange={(date: Date) => setDueDate(date)}
                placeholderText="Due Date"
              />
              <Button type="submit" disabled={!name}>Create</Button>
            </form>
          </Body>
        </Content>
      </Wrapper>
    </Modal>
  );
};

export default ModalCreate;
