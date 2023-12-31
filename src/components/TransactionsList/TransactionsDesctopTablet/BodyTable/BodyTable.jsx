import React from 'react';
import { useDispatch } from 'react-redux';
import { openAddModal } from 'redux/global/slice';

import DesktopTableList from '../DesktopTableList/DesktopTableList';
import css from './BodyTable.module.css';
import Icons from '../../../../images/sprite.svg';

const BodyTable = ({ finanseSort }) => {
  const dispatch = useDispatch();
  const handleOpenAddModal = () => {
    dispatch(openAddModal());
  };
  return (
    <>
      {finanseSort.length === 0 ? (
        <tr className={css.tr}>
          <td className={css.td}>
            <svg width={'120px'} height={'120px'}>
              <use href={Icons + '#icon-time-money'}></use>
            </svg>
            <button className={css.button} onClick={handleOpenAddModal}>
              add transactions...
            </button>
          </td>
        </tr>
      ) : (
        <>
          {finanseSort.map(item => {
            return <DesktopTableList key={item.id} {...item} />;
          })}
        </>
      )}
    </>
  );
};

export default BodyTable;
