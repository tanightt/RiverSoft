import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectRefresh, selectUser } from 'redux/auth/authSelectors';
import { lazy, useEffect } from 'react';
import { refreshUser } from 'redux/auth/authOperations';
import { getCurrencyThunk } from 'redux/currency/currencyOperations';
import { refreshCurrencyDate } from 'redux/currency/currencySlice';
import { selectCurrencyDate } from 'redux/currency/currencySelectors';
import Header from './Header/Header';
import { Loader } from './Loader/Loader';
import { useMediaQuery } from 'react-responsive';
import { ProtectedRoute } from 'hoc/ProtectedRoute';
import { PublicRoute } from 'hoc/PublicRoute';
import { LoginPage } from 'page/LoginPage/LoginPage';
import { RegistrationPage } from 'page/RegistrationPage/RegistrationPage';

const DashboardPage = lazy(() => import('page/DashboardPage/DashboardPage'));
const SummaryPage = lazy(() => import('page/SummaryPage/SummaryPage'));
const Currency = lazy(() => import('./Currency/Currency'));

export const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectUser);

  const currencyDate = useSelector(selectCurrencyDate);

  useEffect(() => {
    if (!isLoggedIn) {
      dispatch(refreshUser());
    }
  }, [isLoggedIn, dispatch]);

  useEffect(() => {
    const oneHour = 3600000;
    const time = Date.now();
    const diffTime = new Date() - new Date(currencyDate);

    if (diffTime < oneHour) {
      return;
    }
    dispatch(refreshCurrencyDate(time));
    dispatch(getCurrencyThunk());
  }, [dispatch, currencyDate]);

  const refresh = useSelector(selectRefresh);

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return refresh ? (
    <Loader />
  ) : (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Header />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="/home" />}></Route>

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/statistic"
          element={
            <ProtectedRoute>
              <SummaryPage />
            </ProtectedRoute>
          }
        ></Route>

        {isMobile && (
          <Route
            path="/currency"
            element={
              <ProtectedRoute>
                <Currency />
              </ProtectedRoute>
            }
          ></Route>
        )}
      </Route>

      <Route
        path="/login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      ></Route>

      <Route
        path="/register"
        element={
          <PublicRoute>
            <RegistrationPage />
          </PublicRoute>
        }
      ></Route>

      <Route
        path="*"
        element={
          <h1 style={{ paddingTop: '300px', textAlign: 'center' }}>
            Oh, something went wrong.
          </h1>
        }
      />
    </Routes>
  );
};
