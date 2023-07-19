import React from 'react';
import css from './TransactionsMobile.module.css';

const TransactionsMobile = () => {
  return (
    <div>
      <ul className={css.block}>
        <li className={css.text}>
          <div>Date</div>
          <div>04.01.19</div>
        </li>
        <li>
          <span></span>
          <span></span>
        </li>
        <li>
          <span></span>
          <span></span>
        </li>
        <li>
          <span></span>
          <span></span>
        </li>
        <li>
          <span></span>
          <span></span>
        </li>
        <li>
          <span></span>
          <span></span>
        </li>
      </ul>
    </div>
  );
};

export default TransactionsMobile;
