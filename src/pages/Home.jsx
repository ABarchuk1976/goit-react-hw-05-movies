import { Link } from 'react-router-dom';
import { API_ACTIONS } from 'components/constants/api.constants.js';
import { useState, useEffect } from 'react';
import { fetchAPIMovies } from 'components/services/common-api.service.js';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchAPIMovies(API_ACTIONS.TRENDING).then(({ results }) => {
      setMovies([...results.map(({ id, title }) => ({ id, title }))]);
    });
  }, []);

  return (
    <main>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`movies/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};
