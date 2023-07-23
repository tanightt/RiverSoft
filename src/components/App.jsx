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
import { PrivateRouter } from 'hoc/PrivateRouter';
import { PublicRouter } from 'hoc/PublicRouter';
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
          <PrivateRouter>
            <Header />
          </PrivateRouter>
        }
      >
        <Route index element={<Navigate to="/home" />}></Route>

        <Route
          path="/home"
          element={
            <PrivateRouter>
              <DashboardPage />
            </PrivateRouter>
          }
        ></Route>

        <Route
          path="/statistic"
          element={
            <PrivateRouter>
              <SummaryPage />
            </PrivateRouter>
          }
        ></Route>

        {isMobile && (
          <Route
            path="/currency"
            element={
              <PrivateRouter>
                <Currency />
              </PrivateRouter>
            }
          ></Route>
        )}
      </Route>

      <Route
        path="/login"
        element={
          <PublicRouter>
            <LoginPage />
          </PublicRouter>
        }
      ></Route>

      <Route
        path="/register"
        element={
          <PublicRouter>
            <RegistrationPage />
          </PublicRouter>
        }
      ></Route>

      <Route path="*" element={<h1> Error</h1>} />
    </Routes>
  );
};
