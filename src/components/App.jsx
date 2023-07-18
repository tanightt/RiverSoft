import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<h1>Home page</h1>} />
        <Route path="/statistic" element={<h1>Statistics</h1>} />
        <Route path="/login" element={<h1>Login page</h1>} />
        <Route path="/register" element={<h1>Registration page</h1>} />
        <Route path="/currency" element={<h1>Currency page</h1>} />
        <Route path="*" element={<h1> Error</h1>} />
      </Route>
    </Routes>
  );
};
