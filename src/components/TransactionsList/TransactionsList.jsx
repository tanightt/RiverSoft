import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import TransactionsDesctopTablet from './TransactionsDesctopTablet/TransactionsDesctopTablet';
import TransactionsMobile from './TransactionsMobile/TransactionsMobile';
import { useDispatch } from 'react-redux';
import {
  getCategoriesThunk,
  getTransactionThunk,
} from 'redux/transactions/transactionsOperations';

const TransactionsList = ({ finanseSort, Scrol }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTransactionThunk());
    dispatch(getCategoriesThunk());
  }, [dispatch]);

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width:768px)',
  });
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <>
      {isDesktopOrLaptop && (
        <TransactionsDesctopTablet Scrol={Scrol} finanseSort={finanseSort} />
      )}
      {isMobile && <TransactionsMobile finanseSort={finanseSort} />}
    </>
  );
};

export default TransactionsList;
