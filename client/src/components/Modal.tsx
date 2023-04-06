import React, { useEffect, useRef, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  children: ReactNode;
}

function Modal({ children }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  if (!modalRef.current) {
    modalRef.current = document.createElement('div');
  }

  useEffect(() => {
    const modalRoot = document.getElementById('modal');
    modalRoot?.appendChild(modalRef.current);

    return () => modalRoot?.removeChild(modalRef.current);
  }, []);

  return createPortal(
    <div className="modal-active">{children}</div>,
    modalRef.current!
  );
}

export default Modal;
