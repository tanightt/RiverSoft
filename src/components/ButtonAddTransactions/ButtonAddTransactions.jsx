import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectOpenModalAdd } from 'redux/global/selectors';
import css from './ButtonAddTransactions.module.css';
import { openAddModal } from 'redux/global/slice';

const svgPlus = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10 0V20" stroke="white" strokeWidth="2" />
    <path d="M0 10L20 10" stroke="white" strokeWidth="2" />
  </svg>
);

const ButtonAddTransactions = () => {
  //   const selectOpenAdd = useSelector(selectOpenModalAdd);
  const dispatch = useDispatch();

  const handleOpenAddModal = () => {
    dispatch(openAddModal());
  };

  return (
    <div>
      <button
        type="button"
        className={css.btnAddTransaction}
        onClick={handleOpenAddModal}
      >
        {svgPlus}
      </button>
    </div>
  );
};

export default ButtonAddTransactions;
