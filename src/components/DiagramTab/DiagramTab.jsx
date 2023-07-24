import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth } from 'redux/auth/authSelectors';
import { getTransactions } from 'redux/statistics/statisticsOperation';
import css from './DiagramTab.module.css';
import Select from 'react-select';
import { styleSelect } from './styleSelect';
import {
  monthName,
  nowMonth,
  nowYear,
  options,
  optionsYear,
} from './selectService';

const StatisticsSelect = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const [optionMonth, setOptionMonth] = useState({
    value: nowMonth,
    label: monthName,
  });
  const [optionYear, setOptionYear] = useState({
    value: nowYear,
    label: nowYear,
  });

  const year = optionYear.value;
  const month = optionMonth.value;

  useEffect(() => {
    isAuth &&
      dispatch(
        getTransactions({
          month,

          year,
        })
      );
  }, [dispatch, month, year, isAuth]);

  return (
    <div className={css.selectContainer}>
      <Select
        className={css.select}
        options={options}
        styles={styleSelect}
        defaultValue={optionMonth}
        onChange={setOptionMonth}
        name="optionsMonth"
        id="month-select"
      ></Select>

      <Select
        className={css.select}
        styles={styleSelect}
        defaultValue={optionYear}
        options={optionsYear}
        onChange={setOptionYear}
        name="optionYear"
        id="years-select"
      ></Select>
    </div>
  );
};

export default StatisticsSelect;
