import React from 'react';
import css from './Table.module.css';
import { barColors } from 'components/DiagramTab/selectService';
import formattedAmount from 'config/formattedAmount';

const Table = ({ transactions, filteredCategories, handleClick }) => {
  const { incomeSummary, expenseSummary } = transactions;

  return (
    <div className={css.tableContainer}>
      <div className={css.titleList}>
        <p className={css.textStyle}>Category</p>
        <p className={css.textStyle}>Sum</p>
      </div>
      <ul className={css.categoryList}>
        {filteredCategories.map((it, idx) => (
          <li
            onClick={() => {
              handleClick({
                sum: it.total,
                title: it.name,
                color: barColors[idx],
              });
            }}
            className={css.itemList}
            key={it.name}
          >
            <span
              style={{ backgroundColor: barColors[idx] }}
              className={css.colorBox}
            ></span>

            <p className={css.titleCategory}>{it.name}</p>

            <p className={`${css.sum} ${css.titleCategory}`}>
              {formattedAmount(it.total)}
            </p>
          </li>
        ))}
      </ul>
      <div
        className={css.expenseHover}
        onClick={() =>
          handleClick({
            sum: expenseSummary,
            title: 'Expense',
          })
        }
      >
        <p className={`${css.sumarry} ${css.sumarryExpense}`}>
          Expenses:
          <span className={css.expense}>{formattedAmount(expenseSummary)}</span>
        </p>
      </div>
      <p className={`${css.sumarry} ${css.sumarryIncome}`}>
        Income:{' '}
        <span className={css.income}>{formattedAmount(incomeSummary)}</span>
      </p>
    </div>
  );
};
export default Table;
