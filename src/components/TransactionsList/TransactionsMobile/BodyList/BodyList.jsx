import React from 'react';
import { useDispatch } from 'react-redux';
import { openAddModal } from 'redux/global/slice';
import MobileList from '../MobileList/MobileList';
import Icons from '../../../../images/sprite.svg';
import css from './BodyList.module.css';

const BodyList = ({ finanseSort }) => {
  const dispatch = useDispatch();

  const handleOpenAddModal = () => {
    dispatch(openAddModal());
  };
  return (
    <ul className={css.ollList}>
      {finanseSort.length === 0 ? (
        <div className={css.div}>
          <svg width={'120px'} height={'120px'}>
            <use href={Icons + '#icon-time-money'}></use>
          </svg>
          <button className={css.button} onClick={handleOpenAddModal}>
            add transactions...
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
