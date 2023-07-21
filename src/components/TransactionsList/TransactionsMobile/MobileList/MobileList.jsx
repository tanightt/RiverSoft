import { useDispatch, useSelector } from 'react-redux';
import css from './MobileList.module.css';
import { selectCategories } from 'redux/transactions/transactionsSelectors';
import { deleteTransactionThunk } from 'redux/transactions/transactionsOperations';
import date from 'config/date';
import { openEditModal } from 'redux/global/slice';

const MobileList = ({
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

  const handleDelete = id => {
    dispatch(deleteTransactionThunk(id));
  };
  const handleEdit = id => {
    dispatch(openEditModal(id));
  };

  return (
    <li>
      <ul className={css.block}>
        <li className={css.text}>
          <p>Date</p>
          <p>{date(transactionDate)}</p>
        </li>
        <li className={css.text}>
          <p>Type</p>
          <p>{type === 'EXPENSE' ? '-' : '+'}</p>
        </li>
        <li className={css.text}>
          <p>Category</p>
          <p>{category?.name}</p>
        </li>
        <li className={css.text}>
          <p>Comment</p>
          <p>{comment === '' ? `${category?.name}` : `${comment}`}</p>
        </li>
        <li className={css.text}>
          <p>Sum</p>
          <p
            className={`${
              type === 'EXPENSE' ? `${css.expense}` : `${css.income}`
            }`}
          >
            {Math.abs(amount)}
          </p>
        </li>
        <li className={css.text}>
          <button className={css.buttonDelete} onClick={() => handleDelete(id)}>
            Delete
          </button>
          <button className={css.buttonEdit} onClick={() => handleEdit(id)}>
            Edit
          </button>
        </li>
      </ul>
    </li>
  );
};

export default MobileList;
