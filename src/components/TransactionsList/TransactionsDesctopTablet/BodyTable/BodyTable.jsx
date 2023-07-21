import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openAddModal } from 'redux/global/slice';
import { selectFinance } from 'redux/transactions/transactionsSelectors';
import DesktopTableList from '../DesktopTableList/DesktopTableList';
import css from './BodyTable.module.css';

const BodyTable = () => {
  const dispatch = useDispatch();
  const finance = useSelector(selectFinance);
  const handleOpenAddModal = () => {
    dispatch(openAddModal());
  };
  return (
    <tbody className={css.bodyTable}>
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
            return <DesktopTableList key={item.id} {...item} />;
          })}
        </>
      )}
    </tbody>
  );
};

export default BodyTable;
