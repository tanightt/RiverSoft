import { useSelector } from 'react-redux';
import css from './Balance.module.css';
import { selectUser } from 'redux/auth/authSelectors';

export const Balance = () => {
  const user = useSelector(selectUser);
  const formatBallance = balance => {
    const [integerPart, decimalPart] = balance.toFixed(2).split('.');
    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return `${formattedInteger}.${decimalPart}`;
  };
  const authUser = user?.balance;

  return (
    <div className={css.balanceWrapper}>
      <p className={css.balanceText}>Your balance</p>
      <p className={css.balance}>
        <span className={css.balanceSign}>&#8372; </span>
        {formatBallance(authUser)}
      </p>
    </div>
  );
};
