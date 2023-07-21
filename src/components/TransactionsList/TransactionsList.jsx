import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import TransactionsDesctopTablet from './TransactionsDesctopTablet/TransactionsDesctopTablet';
import TransactionsMobile from './TransactionsMobile/TransactionsMobile';
import { useDispatch } from 'react-redux';
import {
  getCategoriesThunk,
  getTransactionThunk,
} from 'redux/transactions/transactionsOperations';

// import { selectIsAuth } from 'redux/auth/authSelectors';

const TransactionsList = () => {
  // const isLogined = useSelector(selectIsAuth);
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
      {isDesktopOrLaptop && <TransactionsDesctopTablet />}
      {isMobile && <TransactionsMobile />}
    </>
  );
};

export default TransactionsList;
