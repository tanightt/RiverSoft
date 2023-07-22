import React from 'react';
import { useDispatch } from 'react-redux';
import { openAddModal } from 'redux/global/slice';
import MobileList from '../MobileList/MobileList';
import css from './BodyList.module.css';

const BodyList = ({ finanseSort }) => {
  const dispatch = useDispatch();

  const handleOpenAddModal = () => {
    dispatch(openAddModal());
  };
  return (
    <ul>
      {finanseSort.length === 0 ? (
        <div className={css.div}>
          <h1>add transactions...</h1>
          <button className={css.button} onClick={handleOpenAddModal}>
            add
          </button>
        </div>
      ) : (
        <>
          {finanseSort.map(item => {
            return <MobileList key={item.id} {...item} />;
          })}
        </>
      )}
    </ul>
  );
};

export default BodyList;
