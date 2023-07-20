import { NavLink } from 'react-router-dom';
import Icons from '../../images/sprite.svg';
import s from './Navigation.module.css';
import { useMediaQuery } from 'react-responsive';

const routes = [
  { path: '/', text: 'Home', icon: '#icon-home' },
  { path: '/statistic', text: 'Statistics', icon: '#icon-timeline' },
];

export const Navigation = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

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
              <svg width="44" height="44">
                <use href={Icons + route.icon}></use>
              </svg>
              <p>{route.text}</p>
            </NavLink>
          </li>
        ))}
        {isMobile && (
          <li>
            <NavLink to="/currency" className={s.navLink}>
              <svg width="44" height="44">
                <use href={Icons + '#icon-dollar-2'}></use>
              </svg>
            </NavLink>
          </li>
        )}
      </ul>
    </>
  );
};
