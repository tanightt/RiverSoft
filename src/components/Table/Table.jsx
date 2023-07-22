import React from 'react';
import css from './Table.module.css';

const Table = ({ transactions, filteredCategories, handleClick }) => {
  const { incomeSummary, expenseSummary } = transactions;

  const barColors = [
    '#FED057',
    '#FFD8D0',
    '#FD9498',
    '#C5BAFF',
    '#6E78E8',
    '#4A56E2',
    '#81E1FF',
    '#24CCA7',
    '#00AD84',
  ];

  return (
    <div className={css.tableContainer}>
      <div className={css.titleList}>
        <p className={css.textStyle}>Category</p>
        <p className={css.textStyle}>Sum</p>
      </div>
      <ul className={css.categoryList}>
        {filteredCategories.map((it, idx) => (
          <li className={css.itemList} key={it.name}>
            <button
              onClick={() =>
                handleClick({ sum: Math.abs(it.total), title: it.name })
              }
              style={{ backgroundColor: barColors[idx] }}
              className={css.colorBox}
            ></button>

            <p className={css.titleCategory}>{it.name}</p>

            <p className={`${css.sum} ${css.titleCategory}`}>
              {Math.abs(it.total)}
            </p>
          </li>
        ))}
      </ul>
      <p className={`${css.sumarry} ${css.sumarryExpense}`}>
        Expenses:
        <span className={css.expense}>{Math.abs(expenseSummary)}</span>
      </p>
      <p className={`${css.sumarry} ${css.sumarryIncome}`}>
        Income: <span className={css.income}>{incomeSummary}</span>
      </p>
    </div>
  );
};
export default Table;
