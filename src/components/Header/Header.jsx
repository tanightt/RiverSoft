import React from 'react';
import s from './Header.module.css';
import Icons from '../../images/sprite.svg';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.headerLogo}>
        <svg className={s.headerSvg}>
          <use href={Icons + '#icon-logo'}></use>
        </svg>
        <p>Money Guard</p>
      </div>
      <div className={s.exitBox}>
        <p className={s.name}>Name</p>
        <div className={s.border}>
          <svg className={s.exitSvg}>
            <use href={Icons + '#icon-exit-logout'}></use>
          </svg>
          <span>Exit</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
