import React from 'react';
import css from './Header.module.css';
import Icons from '../../images/sprite.svg';
import { NavLink, Outlet } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { openLogOutModal } from 'redux/global/slice';
import { selectOpenLogOut } from 'redux/global/selectors';
import Modal from 'components/Modal/Modal';

const Header = () => {
  const dispatch = useDispatch();
  const isOpenLogout = useSelector(selectOpenLogOut);

  const openModalLogout = () => {
    dispatch(openLogOutModal());
  };
  return (
    <>
      <header className={css.header}>
        <NavLink className={css.headerLogo} href="/">
          <svg className={css.headerSvg}>
            <use href={Icons + '#icon-logo'}></use>
          </svg>
          <p className={css.logoTitle}>Money Guard</p>
        </NavLink>
        <div className={css.exitBox}>
          <p className={css.name}>Name</p>
          <button className={css.buttonLogout} onClick={openModalLogout}>
            <svg className={css.exitSvg}>
              <use href={Icons + '#icon-exit-logout'}></use>
            </svg>
            <p className={css.exitText}>Exit</p>
          </button>
        </div>
      </header>
      {isOpenLogout && <Modal />}
      <div className={css.wrapper}>
        <Layout />
        <Outlet />
      </div>
    </>
  );
};

export default Header;
