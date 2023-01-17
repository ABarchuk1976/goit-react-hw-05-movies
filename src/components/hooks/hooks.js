import { useEffect, useState } from 'react';
import { fetchAPIMovies } from 'components/services/common-api.service.js';

export const useFetchMovies = (action, query = '') => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchAPIMovies(action, query).then(({ results }) => {
      setMovies([...results.map(({ id, title }) => ({ id, title }))]);
    });
  }, [action, query]);

  return [movies, setMovies];
};
