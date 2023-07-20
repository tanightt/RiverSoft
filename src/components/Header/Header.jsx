import React from 'react';
import s from './Header.module.css';
import Icons from '../../images/sprite.svg';
import { Outlet } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { useDispatch } from 'react-redux';
import { openLogOutModal } from 'redux/global/slice';
import { selectUser } from 'redux/auth/authSelectors';

const Header = () => {
  const dispatch = useDispatch();
  return (
    <>
      <header className={s.header}>
        <div className={s.headerLogo}>
          <svg className={s.headerSvg}>
            <use href={Icons + '#icon-logo'}></use>
          </svg>
          <p>Money Guard</p>
        </div>
        <div className={s.exitBox}>
          <p className={s.name}>{selectUser}</p>
          <div className={s.border}>
            <svg className={s.exitSvg}>
              <use href={Icons + '#icon-exit-logout'}></use>
            </svg>
            <button onClick={() => dispatch(openLogOutModal())}>Exit</button>
          </div>
        </div>
      </header>
      <div className={s.wrapper}>
        <Layout />
        <Outlet />
      </div>
    </>
  );
};

export default Header;
