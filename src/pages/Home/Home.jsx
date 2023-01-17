import { useState, useEffect } from 'react';
import { API_ACTIONS } from 'components/constants/api.constants.js';
import { fetchAPIMovies } from 'components/services/common-api.service';
import MovieList from 'components/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchAPIMovies(API_ACTIONS.TRENDING).then(({ results }) => {
      setMovies([...results.map(({ id, title }) => ({ id, title }))]);
    });
  }, []);

  return <MovieList movies={movies} path={'movies/'} />;
};

export default Home;
