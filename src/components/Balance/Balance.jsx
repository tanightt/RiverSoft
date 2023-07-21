import { useSelector } from 'react-redux';
import css from './Balance.module.css';
import { selectFinance } from 'redux/transactions/transactionsSelectors';

export const Balance = () => {
  const balance = useSelector(selectFinance);

  // const balance = useSelector(state => state.auth.user.balance);

  const bal = balance[balance.length - 1];
  console.log(balance);
  console.log(bal);

  return (
    <div className={css.balanceWrapper}>
      <p className={css.balanceText}>Your balance</p>
      {/* <p className={css.balance}>
          <span className={css.balanceSign}>&#8372; </span>
          {balance.toFixed(2)}
        </p> */}
    </div>
  );
};
