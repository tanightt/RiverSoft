import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import TransactionsDesctopTablet from './TransactionsDesctopTablet/TransactionsDesctopTablet';
import TransactionsMobile from './TransactionsMobile/TransactionsMobile';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCategoriesThunk,
  getTransactionThunk,
} from 'redux/transactions/transactionsOperations';
import Modal from 'components/Modal/Modal';
import {
  selectDeleteModal,
  selectEditTransaction,
} from 'redux/global/selectors';
import css from './TransactionsList.module.css';

const TransactionsList = ({ finanseSort, Scrol }) => {
  const dispatch = useDispatch();
  const isEdit = useSelector(selectEditTransaction);
  const isDelete = useSelector(selectDeleteModal);
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
      {isEdit && <Modal />}
      {isDelete && <Modal />}
      {isEdit || isDelete
        ? document.body.classList.add(`${css.noScroll}`)
        : document.body.classList.remove(`${css.noScroll}`)}
    </>
  );
};

export default TransactionsList;
