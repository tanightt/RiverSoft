import { Balance } from 'components/Balance/Balance';
import { Currency } from 'components/Currency/Currency';
import { Navigation } from 'components/Navigation/Navigation';
import { NavLink, Outlet } from 'react-router-dom';

const routes = [
  { path: '/', text: 'Home' },
  { path: '/login', text: 'Login page' },
  { path: '/register', text: 'Registration page' },
];

export const Layout = () => {
  return (
    <>
      <ul>
        {routes.map(route => (
          <li key={route.path}>
            <NavLink to={route.path}>{route.text}</NavLink>
          </li>
        ))}
        <Navigation />
      </ul>
      <Currency />
      <Balance />
      <Outlet />
    </>
  );
};
