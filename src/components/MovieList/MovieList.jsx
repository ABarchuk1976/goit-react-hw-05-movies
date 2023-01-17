import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movies, path }) => {
  const location = useLocation();
  const additionalPath = path ? `${path}/` : '';

  console.log('Location at MovieList: ', location);

  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link to={`${additionalPath}${id}`} state={{ from: location }}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
