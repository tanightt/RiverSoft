import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsAuth } from 'redux/auth/authSelectors';

export const PublicRouter = ({ children }) => {
  const isAuth = useSelector(selectIsAuth);
  const location = useLocation();

  if (isAuth) {
    return <Navigate to={location.state?.from ?? '/home'} />;
  }

  return children;
};
