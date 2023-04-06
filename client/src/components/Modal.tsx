/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useEffect, useRef, ReactNode } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root') as HTMLElement;

interface ModalProps {
  children: ReactNode;
}

function Modal({ children }: ModalProps) {
  const elRef = useRef<HTMLDivElement | null>(null);

  if (!elRef.current) elRef.current = document.createElement('div');

  useEffect(() => {
    const el = elRef.current!;
    modalRoot.appendChild(el);

    return () => {
      modalRoot.removeChild(el);
    };
  }, []);

  return createPortal(
    <div className="modal-active">{children}</div>,
    elRef.current
  );
}

export default Modal;
