import React from 'react';
// import css from './TransactionsMobile.module.css';
import { useSelector } from 'react-redux';
import { selectFinance } from 'redux/transactions/transactionsSelectors';
import MobileList from './MobileList/MobileList';

const TransactionsMobile = () => {
  const finance = useSelector(selectFinance);

  return (
    <ul>
      {finance.map(item => {
        return <MobileList key={item.id} {...item} />;
      })}
    </ul>
  );
};

export default TransactionsMobile;
