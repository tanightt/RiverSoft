import React from 'react';

import css from './DesktopTableList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTransactionThunk } from 'redux/transactions/transactionsOperations';
import { selectCategories } from 'redux/transactions/transactionsSelectors';
import date from 'config/date';

import { openEditModal } from 'redux/global/slice';

const DesktopTableList = ({
  id,
  transactionDate,
  type,
  comment,
  amount,
  categoryId,
}) => {
  const dispatch = useDispatch();
  const categoryName = useSelector(selectCategories);
  const category = categoryName.find(el => el.id === categoryId);

  const handleDelete = key => {
    console.log(id);
    dispatch(deleteTransactionThunk(key));
  };

  const handleEdit = id => {
    dispatch(openEditModal(id));
  };

  return (
    <>
      <tr className={css.bodyTable}>
        <td>{date(transactionDate)}</td>
        <td>{type === 'EXPENSE' ? '-' : '+'}</td>
        <td>{category?.name}</td>
        <td>{comment === '' ? `${category?.name}` : `${comment}`}</td>
        <td
          className={`${
            type === 'EXPENSE' ? `${css.expense}` : `${css.income}`
          }`}
        >
          {Math.abs(amount)}
        </td>
        <td>
          <button className={css.buttonEdit} onClick={() => handleEdit(id)}>
            Edit
          </button>
        </td>
        <td>
          <button className={css.buttonDelete} onClick={() => handleDelete(id)}>
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default DesktopTableList;
