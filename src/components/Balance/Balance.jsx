import { useSelector } from 'react-redux';
import css from './Balance.module.css';
import { selectFinance } from 'redux/transactions/transactionsSelectors';
import { selectUser } from 'redux/auth/authSelectors';
export const Balance = () => {
  const balance = useSelector(selectFinance);
  const user = useSelector(selectUser);
  const bal = balance[balance.length - 1];
  const balanceUser = user?.balance;
  const userBalance = bal?.balanceAfter;
  return (
    <div className={css.balanceWrapper}>
      <p className={css.balanceText}>Your balance</p>
      <p className={css.balance}>
        <span className={css.balanceSign}>&#8372; </span>
        {balance.length === 0
          ? balanceUser?.toFixed(2)
          : userBalance?.toFixed(2)}
      </p>
    </div>
  );
};
