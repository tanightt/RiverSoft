import React from 'react';
import css from './TransactionsDesctopTablet.module.css';

const TransactionsDesctopTablet = () => {
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
      <tbody>
        <tr>
          <td className={css.body}>04.01.19</td>
          <td>-</td>
          <td>Other</td>
          <td>Gift for your wife</td>
          <td>300.00</td>
          <td>
            <button>ok</button>
          </td>
          <td>
            <button>Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TransactionsDesctopTablet;
