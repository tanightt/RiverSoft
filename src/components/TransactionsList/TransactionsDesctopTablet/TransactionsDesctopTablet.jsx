import React from 'react';
import css from './TransactionsDesctopTablet.module.css';
import BodyTable from './BodyTable/BodyTable';
import { useSelector } from 'react-redux';
import { selectLoading } from 'redux/transactions/transactionsSelectors';

const TransactionsDesctopTablet = ({ finanseSort, Scrol }) => {
  const isLoading = useSelector(selectLoading);

  return (
    <div className={`${css.div} `}>
      <table className={css.table}>
        <thead className={css.headerTable}>
          <tr className={css.headerName}>
            <th className={css.date}>Date</th>
            <th className={css.type}>Type</th>
            <th className={css.category}>Category</th>
            <th className={css.comment}>Comment</th>
            <th className={css.sum}>Sum</th>
            <th className={css.th}></th>
          </tr>
        </thead>
      </table>
      <div>
        <table
          className={`${css.secondTable} ${
            Scrol() ? css.overflow : css.nowOverflow
          }`}
        >
          <tbody className={css.tbody}>
            {!isLoading && <BodyTable finanseSort={finanseSort} />}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionsDesctopTablet;
