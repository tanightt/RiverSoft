import React, { useState } from 'react';
import css from './ModalAddTransaction.module.css';
import 'flatpickr/dist/themes/material_green.css';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { closeAddModal } from 'redux/global/slice';
import Select from 'react-select';

const svgClose = (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none">
    <path stroke="#FBFBFB" d="m1 1 16 16M1 17 17 1" />
  </svg>
);

const ModalAddTransaction = () => {
  const dispatch = useDispatch();
  const [typeOfTransaction, setTypeOfTransaction] = useState('Income');

  const handleCloseAddModal = () => {
    dispatch(closeAddModal());
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Написати операцію на створення транзакції та повісити її на сабміт форми, всередині операції на успішне виконання операції закривати модальне вікно екшн на закриття global.isModalAddTransactionOpen. Також операція повинна додавати в redux store нову транзакцію, отриману у відповідь від сервера
    handleCloseAddModal();
  };

  const handleTransactionTypeChange = () => {
    if (typeOfTransaction === 'Income') {
      setTypeOfTransaction('Expense');
    } else {
      setTypeOfTransaction('Income');
    }
  };

  // const validationSchema = Yup.object({
  //   email: Yup.string()
  //     .email('Incorrect email adress.')
  //     .required('Please enter your email.'),
  //   password: Yup.string()
  //     .min(6, 'Password must be at least 6 characters.')
  //     .max(12, 'Password should be no longer than 12 characters.')
  //     .required('Please, enter your password.'),
  // });
  // const formik = useFormik({
  //   initialValues: {
  //     email: '',
  //     password: '',
  //   },
  //   validationSchema,
  //   onSubmit: values => {
  //     dispatch(login({ email: values.email, password: values.password }));
  //   },
  // });

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
        <p className={typeOfTransaction === 'Income' ? css.income : css.text}>
          Income
        </p>
        <label className={css.switch}>
          <input
            className={css.switchInput}
            type="checkbox"
            name="type"
            onClick={handleTransactionTypeChange}
          />
          <span className={css.slider}>
            <span className={css.choiceBtn}>
              {typeOfTransaction === 'Income' ? (
                <span className={css.plus}>+</span>
              ) : (
                <span className={css.minus}>-</span>
              )}
            </span>
          </span>
        </label>
        <p className={typeOfTransaction === 'Expense' ? css.expense : css.text}>
          Expense
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        {typeOfTransaction === 'Expense' && (
          <Select
            placeholder="Select a category"
            // options={options}
            // styles={customStyles}
            // value={categoryId?.value}
            // onChange={({ value }) => formik.setFieldValue('categoryId', value)}
          />
        )}
        <div>
          <input type="number" name="amount" placeholder="0.00" />
          <Flatpickr
            options={{
              dateFormat: 'd.m.Y',
              disableMobile: 'true',
            }}
            type="date"
            name="transactionDate"
            id="date"
            placeholder="DD.MM.YYYY"
          />
        </div>
        <input type="text" name="comment" placeholder="Comment" />
        <button type="submit">Add</button>
      </form>
      <button className={css.btn} type="button" onClick={handleCloseAddModal}>
        Cancel
      </button>
    </div>
  );
};

export default ModalAddTransaction;
