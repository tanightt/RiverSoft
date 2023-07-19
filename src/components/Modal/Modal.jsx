import React from 'react';
import ReactDOM from 'react-dom';
import ModalAddTransaction from 'components/ModalAddTransaction/ModalAddTransaction';
import ModalEditTransaction from 'components/ModalEditTransaction/ModalEditTransaction';
import ModalLogOut from 'components/ModalLogOut/ModalLogOut';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal');
const Modal = ({ isAdd, isExit, isEdit }) => {
  return ReactDOM.createPortal(
    <div className={css.backdrop}>
      {isAdd && <ModalAddTransaction />}
      {isExit && <ModalLogOut />}
      {isEdit && <ModalEditTransaction />}
    </div>,
    modalRoot
  );
};

export default Modal;
