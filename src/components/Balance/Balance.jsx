import { useSelector } from 'react-redux';
import css from './Balance.module.css';
import { selectFinance } from 'redux/transactions/transactionsSelectors';

export const Balance = () => {
  const balance = useSelector(selectFinance);

  const bal = balance[balance.length - 1];

  const userBalance = bal?.balanceAfter;
  const number = 0;
  return (
    <div className={css.balanceWrapper}>
      <p className={css.balanceText}>Your balance</p>
      <p className={css.balance}>
        <span className={css.balanceSign}>&#8372; </span>

        {balance.length === 0 ? number.toFixed(2) : userBalance?.toFixed(2)}
      </p>
    </div>
  );
};
