import ButtonAddTransactions from 'components/ButtonAddTransactions/ButtonAddTransactions';
import HomeTab from 'components/HomeTab/HomeTab';
import React from 'react';

const DashboardPage = () => {
  return (
    <div>
      <HomeTab />
      <ButtonAddTransactions />
    </div>
  );
};

export default DashboardPage;
