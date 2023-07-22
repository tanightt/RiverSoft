import TransactionsList from 'components/TransactionsList/TransactionsList';
import { useSelector } from 'react-redux';
import { selectFinance } from 'redux/transactions/transactionsSelectors';
// import css from './HomeTab.module.css';

const HomeTab = () => {
  const finance = useSelector(selectFinance);
  const finanseSort = [...finance]
    .reverse()
    .sort((a, b) => new Date(b.transactionDate) - new Date(a.transactionDate));
  const Scrol = () => {
    if (finanseSort.length >= 7) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <TransactionsList Scrol={Scrol} finanseSort={finanseSort} />
    </>
  );
};

export default HomeTab;
