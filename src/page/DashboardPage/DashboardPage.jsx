import { Balance } from 'components/Balance/Balance';
import ButtonAddTransactions from 'components/ButtonAddTransactions/ButtonAddTransactions';
import HomeTab from 'components/HomeTab/HomeTab';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

const DashboardPage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  return (
    <div>
      {isMobile && <Balance />}

      <HomeTab />
      <ButtonAddTransactions />
    </div>
  );
};

export default DashboardPage;
