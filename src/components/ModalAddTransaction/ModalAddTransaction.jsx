import React from 'react';
import css from './ModalAddTransaction.module.css';
import Flatpickr from 'react-flatpickr';

const svgClose = (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none">
    <path stroke="#FBFBFB" d="m1 1 16 16M1 17 17 1" />
  </svg>
);

const ModalAddTransaction = () => {
  return (
    <div className={css.addModal}>
      <button type="button" className="iconBtn">
        {svgClose}
      </button>
      <h2>Add transaction</h2>
      <div>
        <p>Income</p>
        <label>
          <input type="checkbox" name="value" />
          <span>{<span> PLUS: MINUS </span>}</span>
        </label>
        <p>Expense</p>
      </div>
      <form>
        <div>
          <input type="number" name="amount" placeholder="0.00" />
          {/* <Flatpickr
            options={{
              dateFormat: 'd.m.Y',
              disableMobile: 'true',
            }}
            type="date"
            name="transactionDate"
            id="date"
            placeholder="DD.MM.YYYY"
          /> */}
        </div>
        <input type="text" name="comment" placeholder="Comment" />
        <button type="submit">Add</button>
      </form>
      <button className={css.btn} type="button">
        Cancel
      </button>
    </div>
  );
};

export default ModalAddTransaction;
