import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeDeleteModal } from 'redux/global/slice';
import css from './ModalDeleteTransaction.module.css';
import { deleteTransactionThunk } from 'redux/transactions/transactionsOperations';
import { selectDeleteModal } from 'redux/global/selectors';
import { refreshUser } from 'redux/auth/authOperations';

const ModalDeleteTransaction = () => {
  const dispatch = useDispatch();
  const id = useSelector(selectDeleteModal);

  const handleCancelDeleteModal = () => {
    dispatch(closeDeleteModal());
  };

  return (
    <div className={css.modalLogout}>
      <p className={css.modalTitle}>
        Are you sure you want to delete this transaction?
      </p>
      <button
        className={css.logoutBtn}
        type="button"
        onClick={() => {
          dispatch(deleteTransactionThunk(id));
          dispatch(closeDeleteModal());
          // dispatch(refreshUser());
        }}
      >
        Yes
      </button>
      <button
        className={css.cancelBtn}
        type="button"
        onClick={handleCancelDeleteModal}
      >
        Cancel
      </button>
    </div>
  );
};

export default ModalDeleteTransaction;
