import React, { useEffect } from 'react';
import css from './ModalAddTransaction.module.css';
import 'flatpickr/dist/themes/material_green.css';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { closeAddModal } from 'redux/global/slice';
import Select from 'react-select';
import { customStyles } from '../../stylesheet/customStyles';
import { selectCategories } from 'redux/transactions/transactionsSelectors';
import {
  addTransactionThunk,
  getCategoriesThunk,
} from 'redux/transactions/transactionsOperations';

const svgClose = (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none">
    <path stroke="#FBFBFB" d="m1 1 16 16M1 17 17 1" />
  </svg>
);

const ModalAddTransaction = () => {
  const dispatch = useDispatch();

  const categories = useSelector(selectCategories);
  const incomeCategoties = categories.find(el => el.type === 'INCOME');
  const expenseCategories = categories.filter(el => el.type !== 'INCOME');

  const options = expenseCategories.map(el => ({
    value: el.id,
    label: el.name,
  }));

  useEffect(() => {
    if (!categories?.length) {
      dispatch(getCategoriesThunk());
    }
  }, [dispatch, categories]);

  const handleCloseAddModal = () => {
    dispatch(closeAddModal());
  };

  const formik = useFormik({
    initialValues: {
      amount: '',
      transactionDate: '',
      comment: '',
      categoryId: 'INCOME',
      type: false,
    },

    onSubmit: value => {
      const date = value.transactionDate.toString();

      if (type) {
        dispatch(
          addTransactionThunk({
            ...value,
            type: 'EXPENSE',
            amount: 0 - value.amount,
            transactionDate: new Date(date),
          })
        );
        console.log(transactionDate);
        // console.log(date);
      } else {
        dispatch(
          addTransactionThunk({
            ...value,
            type: 'INCOME',
            categoryId: incomeCategoties.id,
            transactionDate: new Date(date),
          })
        );
      }
      handleCloseAddModal();
    },
  });
  const { type, amount, comment, transactionDate, categoryId } = formik.values;

  return (
    <div className={css.addModal}>
      <button
        type="button"
        className={css.iconClose}
        onClick={handleCloseAddModal}
      >
        {svgClose}
      </button>
      <h2 className={css.modalTitle}>Add transaction</h2>
      <div className={css.transactionChange}>
        <p className={!type ? css.income : css.text}>Income</p>
        <label className={css.switch}>
          <input
            className={css.switchInput}
            type="checkbox"
            name="type"
            value={type}
            onClick={formik.handleChange}
          />
          <span className={css.slider}>
            <span
              className={`${css.choiceBtn} ${
                !type ? css.choiceBgPlus : css.choiceBgminus
              }`}
            >
              {!type ? (
                <span className={css.plus}>+</span>
              ) : (
                <span className={css.minus}>-</span>
              )}
            </span>
          </span>
        </label>
        <p className={type ? css.expense : css.text}>Expense</p>
      </div>
      <form className={css.form} onSubmit={formik.handleSubmit}>
        {type && (
          <Select
            placeholder="Select a category"
            options={options}
            styles={customStyles}
            value={categoryId?.value}
            onChange={({ value }) => formik.setFieldValue('categoryId', value)}
          />
        )}
        <div className={css.incomeDate}>
          <input
            type="number"
            name="amount"
            value={amount}
            placeholder="0.00"
            className={css.input}
            onChange={formik.handleChange}
          />
          <Flatpickr
            options={{
              dateFormat: 'Y.m.d',
              disableMobile: 'true',
            }}
            type="date"
            name="transactionDate"
            value={transactionDate}
            id="date"
            placeholder="YYYY.MM.DD"
            className={css.input}
            onChange={val => {
              formik.setFieldValue('transactionDate', val[0]);
            }}
          />
        </div>
        <input
          type="text"
          name="comment"
          value={comment}
          placeholder="Comment"
          className={css.input}
          onChange={formik.handleChange}
        />
        <button type="submit" className={css.addBtn}>
          Add
        </button>
      </form>
      <button
        className={css.cancelBtn}
        type="button"
        onClick={handleCloseAddModal}
      >
        Cancel
      </button>
    </div>
  );
};

export default ModalAddTransaction;
