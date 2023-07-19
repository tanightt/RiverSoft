import React from 'react';
import ReactDOM from 'react-dom';
import ModalAddTransaction from 'components/ModalAddTransaction/ModalAddTransaction';
import ModalEditTransaction from 'components/ModalEditTransaction/ModalEditTransaction';
import ModalLogOut from 'components/ModalLogOut/ModalLogOut';
import css from './Modal.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectEditTransaction,
  selectOpenLogOut,
  selectOpenModalAdd,
} from 'redux/global/selectors';
import {
  closeAddModal,
  closeEditModal,
  closeLofOutModal,
} from 'redux/global/slice';

const modalRoot = document.querySelector('#modal');
const Modal = () => {
  const isAdd = useSelector(selectOpenModalAdd);
  const isExit = useSelector(selectOpenLogOut);
  const isEdit = useSelector(selectEditTransaction);

  const dispatch = useDispatch();

  const handleBackdropModalClose = event => {
    if (event.target === event.currentTarget) {
      dispatch(closeAddModal());
      dispatch(closeEditModal());
      dispatch(closeLofOutModal());
    }
  };

  const handleEscKeyModalClose = event => {
    if (event.key === 'Escape') {
      dispatch(closeAddModal());
      dispatch(closeEditModal());
      dispatch(closeLofOutModal());
    }
  };

  window.addEventListener('keydown', handleEscKeyModalClose);

  return ReactDOM.createPortal(
    <div className={css.backdrop} onClick={handleBackdropModalClose}>
      {isAdd && <ModalAddTransaction />}
      {isExit && <ModalLogOut />}
      {isEdit && <ModalEditTransaction />}
    </div>,
    modalRoot
  );
};

export default Modal;
