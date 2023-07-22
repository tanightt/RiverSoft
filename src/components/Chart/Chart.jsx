import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import css from './Chart.module.css';
import { Doughnut } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectIsAuth } from 'redux/auth/authSelectors';
import Icons from '../../images/sprite.svg';

ChartJS.register(ArcElement, Tooltip);

const Chart = ({ transactions, filteredCategories, categoryInfo }) => {
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
        borderWidth: 2,
        cutout: '70%',
      },
    ],
  };

  const textCenter = {
    id: 'textCenter',
    afterDraw(chart, args, pluginOptions) {
      const {
        ctx,
        chartArea: { left, right, top, bottom, width, height },
      } = chart;
      const expense = transactions.expenseSummary;
      // console.log(expense);
      ctx.save();

      // const text = chart.data.datasets[0].data;
      // const textIdx = text.filter((el,idx)=>)

      ctx.font = 'bolder 30px sans-serif';
      ctx.fillStyle = 'white';
      ctx.textAlign = 'center';
      // ctx.fillText(`Expense:${total}`, width / 2, height / 2);
    },
  };
  console.log(textCenter);
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
          plugins={[textCenter]}
        />
        {categoryInfo.sum !== 0 ? (
          <p className={css.total}>
            {categoryInfo.title} : <br /> &#8372; {categoryInfo.sum}
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
