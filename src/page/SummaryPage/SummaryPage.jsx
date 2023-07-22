import Chart from 'components/Chart/Chart';
import StatisticsSelect from 'components/StatisticsSelect/StatisticsSelect';
import Table from 'components/Table/Table';

import { useSelector } from 'react-redux';

import { selectTransactions } from 'redux/statistics/statisticsSelector';
import css from './SummaryPage.module.css';
import { useEffect, useState } from 'react';
const SummaryPage = () => {
  const transactions = useSelector(selectTransactions);
  const expense = transactions.expenseSummary;
  console.log(expense);

  const [element, setElement] = useState({
    title: '',
    sum: 0,
  });
  useEffect(() => {
    setElement({
      title: 'Expense',
      sum: Math.abs(transactions.expenseSummary),
    });
  }, [transactions]);
  const { categoriesSummary } = transactions;
  const filteredCategories = categoriesSummary.filter(
    category => category.name !== 'Income'
  );

  // const filteredtotal = categoriesSummary.find(el => console.log(el.total));
  // console.log(filteredtotal);

  const handleClick = ({ title, sum }) => {
    setElement({ title, sum });
  };
  return (
    <>
      <div className={css.wrapper}>
        <Chart
          categoryInfo={element}
          transactions={transactions}
          filteredCategories={filteredCategories}
        />
        <div>
          <StatisticsSelect />
          <Table
            handleClick={info => handleClick(info)}
            transactions={transactions}
            filteredCategories={filteredCategories}
          />
        </div>
      </div>
    </>
  );
};

export default SummaryPage;
