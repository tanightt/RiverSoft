import { NavLink } from 'react-router-dom';

const routes = [
  { path: '/statistic', text: 'Statistics' },
  { path: '/currency', text: 'Currency page' },
];

export const Navigation = () => {
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
