import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import css from './Chart.module.css';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip);

const Chart = ({ filteredCategories }) => {
  const xValues = filteredCategories.map(it => it.name);

  const yValues = filteredCategories.map(it => Math.abs(it.total));

  const barColors = [
    '#FED057',
    '#FFD8D0',
    '#FD9498',
    '#C5BAFF',
    '#6E78E8',
    '#4A56E2',
    '#81E1FF',
    '#24CCA7',
    '#00AD84',
  ];

  const data = {
    labels: xValues,
    datasets: [
      {
        data: yValues,
        backgroundColor: barColors,
        borderColor: 'transparent',
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
      </div>
    </div>
  );
};

export default Chart;
