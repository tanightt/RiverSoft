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
    <>
      {finance.length === 0 ? (
        <tr>
          <td className={css.td}>
            <h1>add transactions...</h1>
            <button className={css.button} onClick={handleOpenAddModal}>
              add
            </button>
          </td>
        </tr>
      ) : (
        <>
          {finance.map(item => {
            return <DesktopTableList key={item.id} {...item} />;
          })}
        </>
      )}
    </>
  );
};

export default BodyTable;