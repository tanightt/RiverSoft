import React from 'react';
import css from './ModalEditTransaction.module.css';
import Icons from '../../images/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { closeEditModal } from 'redux/global/slice';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { selectEditTransaction } from 'redux/global/selectors';
import {
  selectCategories,
  selectFinance,
} from 'redux/transactions/transactionsSelectors';
import moment from 'moment';
import { patchTransactionThunk } from 'redux/transactions/transactionsOperations';
import Select from 'react-select';
import { customStyles } from 'stylesheet/customStyles';
import Flatpickr from 'react-flatpickr';
// import { refreshUser } from 'redux/auth/authOperations';
import { toast } from 'react-toastify';

const ModalEditTransaction = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const transactions = useSelector(selectFinance);
  const idTransaction = useSelector(selectEditTransaction);

  const singleTransaction = transactions.find(el => el.id === idTransaction);

  // const incomeCategories = categories.find(el => el.type === 'INCOME');
  const expenseCatogories = categories.filter(el => el.type !== 'INCOME');

  const options = expenseCatogories.map(el => ({
    value: el.id,
    label: el.name,
  }));

  const validationSchema = Yup.object({
    amount: Yup.number('Must be a number!'),
  });

  const initialValues = {
    id: singleTransaction.id,
    amount:
      singleTransaction.type === 'EXPENSE'
        ? Math.abs(singleTransaction.amount)
        : singleTransaction.amount,
    transactionDate: moment(singleTransaction.transactionDate).format(
      'DD.MM.YYYY'
    ),
    comment: singleTransaction?.comment,
    categoryId: singleTransaction.categoryId,
    type: singleTransaction.type === 'INCOME' ? true : false,
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values => {
      if (values.amount < 0) {
        toast.error('Please enter a positive number');
        return;
      } else if (values.amount > 1000000) {
        toast.error('Your amount is too high! Max sum is 1 000 000');
        return;
      } else if (values.comment.length > 20) {
        toast.error('Sorry! You can enter only 20 characters');
        return;
      } else if (!values.amount) {
        toast.error('You have not entered an amount');
        return;
      }
      const date = values.transactionDate
        .toString()
        .replace('00:00:00', '12:00:00');

      const updateValues = {
        ...values,
        categoryId: formik.values.categoryId,
        amount: values.type ? Number(values.amount) : 0 - values.amount,
        type: values.type ? 'INCOME' : 'EXPENSE',
        id: initialValues.id,
        transactionDate: new Date(date).toISOString().substring(0, 10),
      };
      dispatch(patchTransactionThunk(updateValues));
      // dispatch(refreshUser());
      handleCloseEditModal();
    },
  });

  const { type, transactionDate, categoryId } = formik.values;

  const handleCloseEditModal = () => {
    dispatch(closeEditModal());
  };

  return (
    <div className={css.editModal}>
      <button
        type="button"
        className={css.btnClose}
        onClick={handleCloseEditModal}
      >
        <svg className={css.closeBtnIcon}>
          <use href={Icons + '#icon-close'}></use>
        </svg>
      </button>
      <h2 className={css.modalTitle}>Edit transaction</h2>
      <div className={css.buttonWrapper}>
        <button
          className={`${css.button} ${type ? css.yellow : ''}`}
          type="button"
          onClick={() => {
            formik.setFieldValue('type', true);
          }}
        >
          Income
        </button>
        <p className={css.slash}>
          <svg className={css.iconSlash}>
            <use href={Icons + '#icon-vector'}></use>
          </svg>
        </p>
        <button
          className={`${css.button} ${!type ? css.orange : ''}`}
          type="button"
          onClick={() => {
            formik.setFieldValue('type', false);
          }}
        >
          Expense
        </button>
      </div>
      <form className={css.form} onSubmit={formik.handleSubmit}>
        {!type && (
          <Select
            value={options.find(e => e.value === categoryId)}
            styles={customStyles}
            options={options}
            isDisabled={true}
            onChange={({ value }) => {
              formik.setFieldValue('categoryId', value);
            }}
          />
        )}
        <div className={css.inputContainer}>
          <input
            className={css.input}
            type="number"
            name="amount"
            placeholder="0.00"
            value={formik.values.amount}
            onChange={formik.handleChange}
          />
          <Flatpickr
            value={transactionDate}
            className={css.input}
            options={{
              dateFormat: 'd.m.Y',
              disableMobile: 'true',
            }}
            type="date"
            name="transactionDate"
            id="date"
            selected={transactionDate}
            onChange={value => {
              formik.setFieldValue('transactionDate', value[0]);
            }}
          />
          <svg className={css.iconCalendar}>
            <use href={Icons + '#icon-calendar'}></use>
          </svg>
        </div>
        <input
          className={css.input}
          type="text"
          name="comment"
          onChange={formik.handleChange}
          placeholder="Comment"
          value={formik.values.comment}
        />
        <button type="submit" className={css.saveBtn}>
          SAVE
        </button>
      </form>
      <button
        type="button"
        className={css.cancelBtn}
        onClick={handleCloseEditModal}
      >
        CANCEL
      </button>
    </div>
  );
};

export default ModalEditTransaction;
