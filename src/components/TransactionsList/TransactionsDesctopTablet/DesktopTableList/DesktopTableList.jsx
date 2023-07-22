import React from 'react';

import css from './DesktopTableList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTransactionThunk } from 'redux/transactions/transactionsOperations';
import { selectCategories } from 'redux/transactions/transactionsSelectors';
import date from 'config/date';
import Icons from '../../../../images/sprite.svg';
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
    console.log(id);
    dispatch(openEditModal(id));
  };

  const newDate = date(transactionDate);

  return (
    <tr className={css.bodyTable}>
      <td className={css.date}>{newDate}</td>
      <td className={css.type}>{type === 'EXPENSE' ? '-' : '+'}</td>
      <td className={css.category}>{category?.name}</td>
      <td className={css.comment}>
        {comment === '' ? `${category?.name}` : `${comment}`}
      </td>
      <td
        className={`${css.sum} ${
          type === 'EXPENSE' ? `${css.expense}` : `${css.income}`
        }`}
      >
        {Math.abs(amount)}
      </td>
      <td className={css.sectionButton}>
        <button className={css.buttonEdit} onClick={() => handleEdit(id)}>
          <svg className={css.pen}>
            <use href={Icons + '#icon-pen'}></use>
          </svg>
        </button>

        <button className={css.buttonDelete} onClick={() => handleDelete(id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default DesktopTableList;
