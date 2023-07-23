import { useDispatch, useSelector } from 'react-redux';
import css from './MobileList.module.css';
import { selectCategories } from 'redux/transactions/transactionsSelectors';
import { deleteTransactionThunk } from 'redux/transactions/transactionsOperations';
import date from 'config/date';
import { openEditModal } from 'redux/global/slice';
import { selectEditTransaction } from 'redux/global/selectors';
import Modal from 'components/Modal/Modal';
import Icons from '../../../../images/sprite.svg';

const MobileList = ({
  id,
  transactionDate,
  type,
  comment,
  amount,
  categoryId,
}) => {
  const dispatch = useDispatch();
  const isEdit = useSelector(selectEditTransaction);
  const categoryName = useSelector(selectCategories);
  const category = categoryName.find(el => el.id === categoryId);

  const handleDelete = id => {
    dispatch(deleteTransactionThunk(id));
  };
  const handleEdit = id => {
    dispatch(openEditModal(id));
  };

  return (
    <>
      <li>
        <ul
          className={`${css.block} ${
            type === 'EXPENSE' ? `${css.expenseBorder}` : `${css.incomeBorder}`
          }`}
        >
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
            <button
              className={css.buttonDelete}
              onClick={() => handleDelete(id)}
            >
              Delete
            </button>
            <button className={css.buttonEdit} onClick={() => handleEdit(id)}>
              <svg className={css.pen}>
                <use href={Icons + '#icon-pen'}></use>
              </svg>
              Edit
            </button>
          </li>
        </ul>
      </li>
      {isEdit && <Modal />}
    </>
  );
};

export default MobileList;
