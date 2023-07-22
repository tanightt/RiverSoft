import React from 'react';
import { useSelector } from 'react-redux';
import { selectLoading } from 'redux/transactions/transactionsSelectors';
import BodyList from './BodyList/BodyList';
// import css from './TransactionsMobile.module.css';

const TransactionsMobile = ({ finanseSort }) => {
  const isLoading = useSelector(selectLoading);
  return (
    <>
      {isLoading ? <h1>Loading...</h1> : <BodyList finanseSort={finanseSort} />}
    </>
  );
};

export default TransactionsMobile;
