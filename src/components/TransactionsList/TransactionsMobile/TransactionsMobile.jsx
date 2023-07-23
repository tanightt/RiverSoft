import React from 'react';
import { useSelector } from 'react-redux';
import { selectLoading } from 'redux/transactions/transactionsSelectors';
import BodyList from './BodyList/BodyList';

const TransactionsMobile = ({ finanseSort }) => {
  const isLoading = useSelector(selectLoading);
  return <>{!isLoading && <BodyList finanseSort={finanseSort} />}</>;
};

export default TransactionsMobile;
