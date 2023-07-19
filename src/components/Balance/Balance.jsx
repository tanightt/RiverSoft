// import { useSelector } from 'react-redux';
import css from './Balance.module.css';
export const Balance = () => {
  // const balance = useSelector(selectBalance);
  

  return (
    <div className={css.balanceWrapper}>
      <p className={css.balanceText}>Your balance</p>
      <p className={css.balance}>
        <span className={css.balanceSign}>&#8372;</span>
        {/* {balance.toFixed(2)} */} 24 000.00
      </p>
    </div>
  );
};
