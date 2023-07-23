import React, { Suspense } from 'react';
import css from './Header.module.css';
import Icons from '../../images/sprite.svg';
import { NavLink, Outlet } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { openLogOutModal } from 'redux/global/slice';
import { selectOpenLogOut } from 'redux/global/selectors';
import Modal from 'components/Modal/Modal';
import { selectUser } from 'redux/auth/authSelectors';
import { Loader } from 'components/Loader/Loader';

const Header = () => {
  const dispatch = useDispatch();
  const isOpenLogout = useSelector(selectOpenLogOut);

  const openModalLogout = () => {
    dispatch(openLogOutModal());
  };
  const user = useSelector(selectUser);
  return (
    <>
      <header className={css.header}>
        <NavLink className={css.headerLogo} to='/home'>
          <svg className={css.headerSvg}>
            <use href={Icons + '#icon-logo'}></use>
          </svg>
          <p className={css.logoTitle}>Money Guard</p>
        </NavLink>
        <div className={css.exitBox}>
          <p className={css.name}>{user?.username}</p>
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
        <main className={css.mainContent}>
          <Suspense
            fallback={
              <div className={css.loaderContainer}>
                <Loader />
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </main>
      </div>
    </>
  );
};

export default Header;
