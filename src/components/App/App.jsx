import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import GlobalStyle from '../../GlobalStyle.styled';
import Head from '../Head/Head';
import ScrollTop from '../ScrollTop/ScrollTop';
import SharedLayout from '../SharedLayout/SharedLayout';

const Loader = lazy(() => import('../Loader/Loader'));
const Home = lazy(() => import('../../pages/Home'));
const Сatalog = lazy(() => import('../../pages/Сatalog'));
const Favorites = lazy(() => import('../../pages/Favorites'));
// const NotFound = lazy(() => import('../../pages/NotFound'));

function App() {
  return (
    <>
      <Head />
      <GlobalStyle />
      <ScrollTop />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="catalog" element={<Сatalog />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="*" element={<Navigate to="/" />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
