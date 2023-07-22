import s from './Layout.module.css';
import { Balance } from 'components/Balance/Balance';
import Currency from 'components/Currency/Currency';
import { Navigation } from 'components/Navigation/Navigation';
import { useMediaQuery } from 'react-responsive';

export const Layout = () => {
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <div className={s.layout}>
      <div className={s.tabletNav}>
        <Navigation />
        {isTablet && <Balance />}
      </div>
      {isTablet && <Currency className={s.currency} />}
    </div>
  );
};
