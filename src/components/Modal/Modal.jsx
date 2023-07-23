import React from 'react';
import ReactDOM from 'react-dom';
import ModalAddTransaction from 'components/ModalAddTransaction/ModalAddTransaction';
import ModalEditTransaction from 'components/ModalEditTransaction/ModalEditTransaction';
import ModalLogOut from 'components/ModalLogOut/ModalLogOut';
import css from './Modal.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectDeleteModal,
  selectEditTransaction,
  selectOpenLogOut,
  selectOpenModalAdd,
} from 'redux/global/selectors';
import {
  closeAddModal,
  closeDeleteModal,
  closeEditModal,
  closeLofOutModal,
} from 'redux/global/slice';
import ModalDeleteTransaction from 'components/ModalDeleteTransaction/ModalDeleteTransaction';

const modalRoot = document.querySelector('#modal');
const Modal = () => {
  const isAdd = useSelector(selectOpenModalAdd);
  const isExit = useSelector(selectOpenLogOut);
  const isEdit = useSelector(selectEditTransaction);
  const isDelete = useSelector(selectDeleteModal);

  const dispatch = useDispatch();

  const closeModal = () => {
    if (isAdd) {
      dispatch(closeAddModal());
    } else if (isEdit) {
      dispatch(closeEditModal());
    } else if (isExit) {
      dispatch(closeLofOutModal());
    } else if (isDelete) {
      dispatch(closeDeleteModal());
    }
  };

  const handleBackdropModalClose = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  const handleEscKeyModalClose = event => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  window.addEventListener('keydown', handleEscKeyModalClose);

  return ReactDOM.createPortal(
    <div className={css.backdrop} onClick={handleBackdropModalClose}>
      {isAdd && <ModalAddTransaction />}
      {isExit && <ModalLogOut />}
      {isEdit && <ModalEditTransaction />}
      {isDelete && <ModalDeleteTransaction />}
    </div>,
    modalRoot
  );
};

export default Modal;
