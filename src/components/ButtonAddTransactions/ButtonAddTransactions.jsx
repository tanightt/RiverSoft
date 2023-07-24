import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectOpenModalAdd } from 'redux/global/selectors';
import css from './ButtonAddTransactions.module.css';
import { openAddModal } from 'redux/global/slice';
import Modal from 'components/Modal/Modal';
import Icons from '../../images/sprite.svg';

const ButtonAddTransactions = () => {
  const dispatch = useDispatch();
  const isAdd = useSelector(selectOpenModalAdd);

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
        <svg className={css.iconAddPlus}>
          <use href={Icons + '#icon-plus'}></use>
        </svg>
      </button>
      {isAdd && <Modal />}
      {isAdd
        ? document.body.classList.add(`${css.noScroll}`)
        : document.body.classList.remove(`${css.noScroll}`)}
    </div>
  );
};

export default ButtonAddTransactions;
