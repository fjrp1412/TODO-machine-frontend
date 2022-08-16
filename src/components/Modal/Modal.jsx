import React from 'react';
import ReactDOM from 'react-dom';
import { ModalStyles, OverlayStyles } from './ModalStyles';

const Modal = ({ children, node = 'root', open, onClose }) => {
  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <OverlayStyles onClick={onClose} />
      <ModalStyles>{children}</ModalStyles>
    </>,
    document.getElementById(node)
  );
};

export { Modal };
