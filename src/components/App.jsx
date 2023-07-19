import { Route, Routes, useNavigate } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { LoginPage } from 'page/LoginPage/LoginPage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/authSelectors';
import { refreshUser } from 'redux/auth/authOperations';

export const App = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(selectUser)
  useEffect(() => {
    if (!isLoggedIn) {
      dispatch(refreshUser())
    }
  }, [isLoggedIn, navigate, dispatch])

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<h1>Home page</h1>} />
        <Route path="/statistic" element={<h1>Statistics</h1>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<h1>Registration page</h1>} />
        <Route path="/currency" element={<h1>Currency page</h1>} />
        <Route path="*" element={<h1> Error</h1>} />
      </Route>
    </Routes>
  );
};
