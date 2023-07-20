import s from './Layout.module.css';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Balance } from 'components/Balance/Balance';
import { Currency } from 'components/Currency/Currency';
import { Navigation } from 'components/Navigation/Navigation';

export const Layout = () => {
  return (
    <div className={s.layout}>
      <div className={s.tabletNav}>
        <Navigation />
        <Balance />
      </div>
      <Currency className={s.currency} />
      <AuthNav />
    </div>
  );
};
