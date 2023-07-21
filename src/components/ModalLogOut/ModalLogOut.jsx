import React from 'react';
import { useDispatch } from 'react-redux';
import { closeLofOutModal } from 'redux/global/slice';
import css from './ModalLogOut.module.css';
import { logOut } from 'redux/auth/authOperations';
import { useNavigate } from 'react-router-dom';

const ModalLogOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCloseLogOutModal = () => {
    dispatch(closeLofOutModal());
  };
  const handleLogout = () => {
    dispatch(logOut());
    dispatch(closeLofOutModal());
    navigate('/login')
  };

  return (
    <div className={css.modalLogout}>
      <p className={css.modalTitle}>Are you sure you want to log out?</p>
      <button className={css.logoutBtn} type="button" onClick={handleLogout}>
        Log out
      </button>
      <button
        className={css.cancelBtn}
        type="button"
        onClick={handleCloseLogOutModal}
      >
        Cancel
      </button>
    </div>
  );
};

export default ModalLogOut;
