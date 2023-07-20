import React from 'react';
// import css from './DesktopTableList.module.css';
import { useSelector } from 'react-redux';
import { selectCategories } from 'redux/transactions/transactionsSelectors';

const DesktopTableList = ({
  transactionDate,
  type,
  comment,
  amount,
  categoryId,
}) => {
  const categoryName = useSelector(selectCategories);
  const category = categoryName.find(el => el.id === categoryId);
  return (
    <tr>
      <td>{transactionDate}</td>
      <td>{type}</td>
      <td>{category.name}</td>
      <td>{comment}</td>
      <td>{amount}</td>
      <td>
        <button>Edit</button>
      </td>
      <td>
        <button>Delete</button>
      </td>
    </tr>
  );
};

export default DesktopTableList;
