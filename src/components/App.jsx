import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectRefresh, selectUser } from 'redux/auth/authSelectors';
import { Suspense, lazy, useEffect } from 'react';
import { refreshUser } from 'redux/auth/authOperations';
import { getCurrencyThunk } from 'redux/currency/currencyOperations';
import { refreshCurrencyDate } from 'redux/currency/currencySlice';
import { selectCurrencyDate } from 'redux/currency/currencySelectors';
import Header from './Header/Header';
import { Loader } from './Loader/Loader';
import { useMediaQuery } from 'react-responsive';
import { PrivateRouter } from 'hoc/PrivateRouter';
import { PublicRouter } from 'hoc/PublicRouter';

const DashboardPage = lazy(() => import('page/DashboardPage/DashboardPage'));
const SummaryPage = lazy(() => import('page/SummaryPage/SummaryPage'));
const Currency = lazy(() => import('./Currency/Currency'));
const LoginPage = lazy(() => import('page/LoginPage/LoginPage'));
const RegistrationPage = lazy(() =>
  import('page/RegistrationPage/RegistrationPage')
);

export const App = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectUser);

  const currencyDate = useSelector(selectCurrencyDate);

  useEffect(() => {
    if (!isLoggedIn) {
      dispatch(refreshUser());
    }
  }, [isLoggedIn, navigate, dispatch]);

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
    <Suspense>
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
    </Suspense>
  );
};
