import React, { useEffect } from 'react';
import css from './ModalAddTransaction.module.css';
import 'flatpickr/dist/themes/material_green.css';
import Flatpickr from 'react-flatpickr';
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
import moment from 'moment';
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
    amount: Yup.number().typeError('Please enter a valid number'),
    // transactionDate: Yup.date().required('Transaction date is required'),
    categoryId: Yup.string().required('Category is required'),
  });

  const formik = useFormik({
    initialValues: {
      amount: '',
      transactionDate: moment().format('DD.MM.YYYY'),
      comment: '',
      categoryId: 'Income',
      type: false,
    },
    validationSchema: validationSchema,

    onSubmit: value => {
      if (value.amount < 0) {
        toast.error('Please enter a positive number');
        return;
      } else if (value.amount > 1000000) {
        toast.error('Your amount is too high! Max sum is 1 000 000');
        return;
      } else if (value.comment.length > 20) {
        toast.error('Sorry! You can enter only 20 characters');
        return;
      } else if (!value.amount) {
        toast.error('You have not entered an amount');
        return;
      }

      let dateContainer = null;
      if (value.transactionDate?.length) {
        const normalizeDate = value.transactionDate?.split('.').reverse();
        normalizeDate[1] = Number(normalizeDate[1]) - 1;
        dateContainer = new Date(...normalizeDate);
      } else {
        dateContainer = value.transactionDate;
      }

      const date = dateContainer.toString().replace('00:00:00', '12:00:00');

      if (!type) {
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
        <p className={type ? css.income : css.text}>Income</p>
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
                type ? css.choiceBgPlus : css.choiceBgminus
              }`}
            >
              {!type ? (
                <span>
                  <svg className={css.minus}>
                    <use href={Icons + '#icon-minis'}></use>
                  </svg>
                </span>
              ) : (
                <span>
                  <svg className={css.plus}>
                    <use href={Icons + '#icon-plus'}></use>
                  </svg>
                </span>
              )}
            </span>
          </span>
        </label>
        <p className={!type ? css.expense : css.text}>Expense</p>
      </div>
      <form className={css.form} onSubmit={formik.handleSubmit}>
        {!type && (
          <Select
            placeholder="Select a category"
            options={options}
            styles={customStyles}
            value={categoryId?.value}
            onChange={({ value }) => formik.setFieldValue('categoryId', value)}
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
              allowInput: false,
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
