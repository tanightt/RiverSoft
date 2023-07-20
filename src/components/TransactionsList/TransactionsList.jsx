import React, { useEffect } from 'react';

import TransactionsDesctopTablet from './TransactionsDesctopTablet/TransactionsDesctopTablet';
// import TransactionsMobile from './TransactionsMobile/TransactionsMobile';

import { useDispatch, useSelector } from 'react-redux';

import {
  getCategoriesThunk,
  getTransactionThunk,
} from 'redux/transactions/transactionsOperations';

import { selectIsAuth } from 'redux/auth/authSelectors';

const TransactionsList = () => {
  const isLogined = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  useEffect(() => {
    isLogined && dispatch(getTransactionThunk());
    dispatch(getCategoriesThunk());
  }, [dispatch, isLogined]);

  return (
    <>
      <TransactionsDesctopTablet />
      {/* <TransactionsMobile /> */}
    </>
  );
};

export default TransactionsList;
