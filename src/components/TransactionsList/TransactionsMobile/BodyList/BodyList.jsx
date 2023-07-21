import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openAddModal } from 'redux/global/slice';
import { selectFinance } from 'redux/transactions/transactionsSelectors';
import MobileList from '../MobileList/MobileList';
import css from './BodyList.module.css';

const BodyList = () => {
  const dispatch = useDispatch();
  const finance = useSelector(selectFinance);

  const handleOpenAddModal = () => {
    dispatch(openAddModal());
  };
  return (
    <ul>
      {finance.length === 0 ? (
        <div className={css.div}>
          <h1>add transactions...</h1>
          <button className={css.button} onClick={handleOpenAddModal}>
            add
          </button>
        </div>
      ) : (
        <>
          {finance.map(item => {
            return <MobileList key={item.id} {...item} />;
          })}
        </>
      )}
    </ul>
  );
};

export default BodyList;
