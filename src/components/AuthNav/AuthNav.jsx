import { NavLink } from 'react-router-dom';

const routes = [
  { path: '/login', text: 'Login page' },
  { path: '/register', text: 'Registration page' },
];

export const AuthNav = () => {
  return (
    <>
      <ul>
        {routes.map(route => (
          <li key={route.path}>
            <NavLink to={route.path}>{route.text}</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};
