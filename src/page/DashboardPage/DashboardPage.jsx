import { Balance } from 'components/Balance/Balance';
import ButtonAddTransactions from 'components/ButtonAddTransactions/ButtonAddTransactions';
import HomeTab from 'components/HomeTab/HomeTab';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import css from './DashboardPage.module.css';

const DashboardPage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  return (
    <div className={css.homeWrapper}>
      {isMobile && <Balance />}

      <HomeTab />
      <ButtonAddTransactions />
    </div>
  );
};

export default DashboardPage;
