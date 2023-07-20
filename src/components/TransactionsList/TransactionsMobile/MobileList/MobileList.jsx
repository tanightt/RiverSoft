import { useSelector } from 'react-redux';
import css from './MobileList.module.css';
import { selectCategories } from 'redux/transactions/transactionsSelectors';

const MobileList = ({ transactionDate, type, comment, amount, categoryId }) => {
  const categoryName = useSelector(selectCategories);
  const category = categoryName.find(el => el.id === categoryId);
  return (
    <li>
      <ul className={css.block}>
        <li className={css.text}>
          <p>Date</p>
          <p>{transactionDate}</p>
        </li>
        <li className={css.text}>
          <p>Type</p>
          <p>{type}</p>
        </li>
        <li className={css.text}>
          <p>Category</p>
          <p>{category.name}</p>
        </li>
        <li className={css.text}>
          <p>Comment</p>
          <p>{comment}</p>
        </li>
        <li className={css.text}>
          <p>Sum</p>
          <p>{amount}</p>
        </li>
        <li className={css.text}>
          <button>Delete</button>
          <button>Edit</button>
        </li>
      </ul>
    </li>
  );
};

export default MobileList;
