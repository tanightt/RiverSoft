import TransactionsList from 'components/TransactionsList/TransactionsList';
import { useSelector } from 'react-redux';
import { selectFinanseSort } from 'redux/transactions/transactionsSelectors';

const HomeTab = () => {
  const finanseSort = useSelector(selectFinanseSort);

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
