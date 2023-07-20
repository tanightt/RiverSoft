import React, { useEffect } from 'react';

import TransactionsDesctopTablet from './TransactionsDesctopTablet/TransactionsDesctopTablet';
// import TransactionsMobile from './TransactionsMobile/TransactionsMobile';
import { useDispatch } from 'react-redux';
import {
  getCategoriesThunk,
  getTransactionThunk,
} from 'redux/transactions/transactionsOperations';

const TransactionsList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTransactionThunk());
    dispatch(getCategoriesThunk());
  }, [dispatch]);
  return (
    <>
      <TransactionsDesctopTablet />
      {/* <TransactionsMobile /> */}
    </>
  );
};

export default TransactionsList;
