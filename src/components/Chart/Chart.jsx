import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import css from './Chart.module.css';
import { Doughnut } from 'react-chartjs-2';
import Icons from '../../images/sprite.svg';
import { barColors } from 'components/DiagramTab/selectService';

import formattedAmount from 'config/formattedAmount';

ChartJS.register(ArcElement, Tooltip);

const Chart = ({ filteredCategories, categoryInfo }) => {
  const xValues = filteredCategories.map(it => it.name);
  const yValues = filteredCategories.map(it => Math.abs(it.total));

  const data = {
    labels: xValues,
    datasets: [
      {
        data: yValues,
        backgroundColor: barColors,
        borderColor: categoryInfo.color ? categoryInfo.color : 'transparent',
        borderWidth: 2,
        cutout: '70%',
      },
    ],
  };

  return (
    <div className={css.chartContainer}>
      <h2 className={css.titleChart}>Statistics</h2>
      <div className={css.doughnut}>
        <Doughnut
          data={data}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            tooltips: false,
            height: '3',
          }}
        />
        {categoryInfo.sum !== 0 ? (
          <p className={css.total}>
            {categoryInfo.title} : <br /> &#8372;{' '}
            {formattedAmount(categoryInfo.sum)}
          </p>
        ) : (
          <svg className={css.iconWallet} width="175" height="175">
            <use href={Icons + '#icon-wallet-svgrepo-com'}></use>
          </svg>
        )}
      </div>
    </div>
  );
};

export default Chart;
