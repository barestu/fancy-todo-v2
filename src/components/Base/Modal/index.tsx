import { ReactNode, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  children: ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  const [elContainer] = useState(document.createElement('div'));

  useEffect(() => {
    const modalRoot = document.getElementById('modal')!;
    modalRoot.appendChild(elContainer);
    return () => {
      modalRoot.removeChild(elContainer);
    }
  }, []);

  return createPortal(children, elContainer);
};

export default Modal;
