import Chart from 'components/Chart/Chart';
import StatisticsSelect from 'components/StatisticsSelect/StatisticsSelect';
import Table from 'components/Table/Table';

import { useSelector } from 'react-redux';

import { selectTransactions } from 'redux/statistics/statisticsSelector';
import css from './SummaryPage.module.css';
const SummaryPage = () => {
  const transactions = useSelector(selectTransactions);

  const { categoriesSummary } = transactions;
  const filteredCategories = categoriesSummary.filter(
    category => category.name !== 'Income'
  );

  return (
    <>
      <div className={css.wrapper}>
        <Chart
          transactions={transactions}
          filteredCategories={filteredCategories}
        />
        <div>
          <StatisticsSelect />
          <Table
            transactions={transactions}
            filteredCategories={filteredCategories}
          />
        </div>
      </div>
    </>
  );
};

export default SummaryPage;
