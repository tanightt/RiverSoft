import React, { useEffect } from 'react';
import css from './ModalAddTransaction.module.css';
import 'flatpickr/dist/themes/material_green.css';
import Flatpickr, { defaultDate } from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { closeAddModal } from 'redux/global/slice';
import Select from 'react-select';
import { customStyles } from '../../stylesheet/customStyles';
import { selectCategories } from 'redux/transactions/transactionsSelectors';
import {
  addTransactionThunk,
  getCategoriesThunk,
} from 'redux/transactions/transactionsOperations';
import Icons from '../../images/sprite.svg';
import { selectIsAuth } from 'redux/auth/authSelectors';
import { toast } from 'react-toastify';

const ModalAddTransaction = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const categories = useSelector(selectCategories);
  const incomeCategoties = categories.find(el => el.type === 'INCOME');
  const expenseCategories = categories.filter(el => el.type !== 'INCOME');

  const options = expenseCategories.map(el => ({
    value: el.id,
    label: el.name,
  }));

  useEffect(() => {
    if (!categories?.length && isAuth) {
      dispatch(getCategoriesThunk());
    }
  }, [dispatch, categories, isAuth]);

  const handleCloseAddModal = () => {
    dispatch(closeAddModal());
  };

  const validationSchema = Yup.object().shape({
    amount: Yup.number()
      .typeError('Please enter a valid number')
      .required('Amount is required')
      .positive()
      .integer(),
    transactionDate: Yup.date().required('Transaction date is required'),
    categoryId: Yup.string().required('Category is required'),
  });

  // const defaultDate = new Date().toLocaleDateString();
  // console.log(defaultDate);

  const formik = useFormik({
    initialValues: {
      amount: '',
      transactionDate: '',
      comment: '',
      categoryId: 'Income',
      type: false,
    },
    validationSchema: validationSchema,

    onSubmit: value => {
      const date = value.transactionDate
        .toString()
        .replace('00:00:00', '12:00:00');
      if (type) {
        dispatch(
          addTransactionThunk({
            ...value,
            type: 'EXPENSE',
            amount: 0 - value.amount,
            transactionDate: new Date(date).toISOString().substring(0, 10),
          })
        );
      } else {
        dispatch(
          addTransactionThunk({
            ...value,
            type: 'INCOME',
            categoryId: incomeCategoties?.id,
            transactionDate: new Date(date).toISOString().substring(0, 10),
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
        className={css.btnClose}
        onClick={handleCloseAddModal}
      >
        <svg className={css.closeBtnIcon}>
          <use href={Icons + '#icon-close'}></use>
        </svg>
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
                <span>
                  <svg className={css.plus}>
                    <use href={Icons + '#icon-plus'}></use>
                  </svg>
                </span>
              ) : (
                <span>
                  <svg className={css.minus}>
                    <use href={Icons + '#icon-minis'}></use>
                  </svg>
                </span>
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
            isClearable
            onBlur={formik.handleBlur}
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
              dateFormat: 'd.m.Y',
              disableMobile: 'true',
            }}
            type="date"
            name="transactionDate"
            value={transactionDate}
            id="date"
            selected={(transactionDate && new Date(transactionDate)) || null}
            placeholder="YYYY.MM.DD"
            className={css.input}
            onChange={val => {
              formik.setFieldValue('transactionDate', val[0]);
            }}
          />
          <svg className={css.iconCalendar}>
            <use href={Icons + '#icon-calendar'}></use>
          </svg>
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
