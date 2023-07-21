import React from 'react';
import css from './TransactionsDesctopTablet.module.css';
import BodyTable from './BodyTable/BodyTable';
import { useSelector } from 'react-redux';
import { selectLoading } from 'redux/transactions/transactionsSelectors';
// import { Loader } from 'components/Loader/Loader';

const TransactionsDesctopTablet = () => {
  const isLoading = useSelector(selectLoading);
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
      {isLoading ? <h1>Loadding...</h1> : <BodyTable />}
    </table>
  );
};

export default TransactionsDesctopTablet;