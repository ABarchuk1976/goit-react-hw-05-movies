import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<div>Home</div>} />
        <Route path="movies" element={<div>Movies</div>} />
        <Route path="movies/:movieId" element={<div>Movies</div>}>
          <Route path="cast" element={<div>Cast</div>} />
          <Route path="reviews" element={<div>Reviews</div>} />
        </Route>
      </Route>
    </Routes>
  );
};
