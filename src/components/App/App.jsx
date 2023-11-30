import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import GlobalStyle from '../../GlobalStyle.styled';
import ScrollTop from '../ScrollTop/ScrollTop';

// const NotFound = lazy(() => import('../../pages/NotFound'));

const Loader = lazy(() => import('../Loader/Loader'));
const SharedLayout = lazy(() => import('../SharedLayout/SharedLayout'));
const Home = lazy(() => import('../../pages/Home'));
const Movies = lazy(() => import('../../pages/Movies'));
const MoviesDetails = lazy(() => import('../../pages/MoviesDetails'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

function App() {
  return (
    <>
      <GlobalStyle />
      <ScrollTop />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:id" element={<MoviesDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
