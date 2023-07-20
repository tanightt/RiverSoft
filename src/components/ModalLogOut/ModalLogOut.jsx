import React from 'react';
import { useDispatch } from 'react-redux';
import { closeLofOutModal } from 'redux/global/slice';

const ModalLogOut = () => {
  const dispatch = useDispatch();

  const handleCloseLogOutModal = () => {
    dispatch(closeLofOutModal());
  };
  return (
    <div>
      <p>Are you sure you want to log out?</p>
      <button type="button">Log out</button>
      <button type="button" onClick={handleCloseLogOutModal}>
        Cancel
      </button>
    </div>
  );
};

export default ModalLogOut;
