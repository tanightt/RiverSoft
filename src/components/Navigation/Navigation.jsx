import { NavLink } from 'react-router-dom';
import Icons from '../../images/sprite.svg';
import s from './Navigation.module.css';

const routes = [
  { path: '/', text: 'Home', icon: '#icon-home' },
  { path: '/statistic', text: 'Statistics', icon: '#icon-diagram-2' },
  { path: '/currency', text: 'Currency page', icon: '#icon-dollar-2' },
];

export const Navigation = () => {
  return (
    <>
      <ul className={s.nav}>
        {routes.map(route => (
          <li key={route.path}>
            <NavLink
              to={route.path}
              activeClassName={s.active}
              className={s.navLink}
            >
              <svg width="24" height="24">
                <use href={Icons + route.icon}></use>
              </svg>
              {route.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};
