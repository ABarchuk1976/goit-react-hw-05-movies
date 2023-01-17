import { Link } from 'react-router-dom';

const MovieList = ({ movies, path }) => {
  const additionalPath = path ? `${path}/` : '';
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link to={`${additionalPath}${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
