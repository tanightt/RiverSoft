import React from 'react';
import css from './TransactionsDesctopTablet.module.css';
import { useSelector } from 'react-redux';
import { selectFinance } from 'redux/transactions/transactionsSelectors';
import DesktopTableList from './DesktopTableList/DesktopTableList';

const TransactionsDesctopTablet = () => {
  const finance = useSelector(selectFinance);
  return (
    <table className={css.table}>
      <thead className={css.headerTable}>
        <tr className={css.headerName}>
          <th>Date</th>
          <th>Type</th>
          <th>Category</th>
          <th>Comment</th>
          <th>Sum</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody className={css.bodyTable}>
        {finance.map(item => {
          return <DesktopTableList key={item.id} {...item} />;
        })}
      </tbody>
    </table>
  );
};

export default TransactionsDesctopTablet;
