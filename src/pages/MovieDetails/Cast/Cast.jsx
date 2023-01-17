import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchCastByID } from 'components/services/common-api.service';
import { Section } from 'components/SharedLayout/SharedLayout.styled.js';
import { StyledText } from '../MovieDetails.styled';
import { API_IMG_POSTER } from 'components/constants/api.constants';

import noImage from 'components/constants/no_image.jpg';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    fetchCastByID(movieId)
      .then(({ cast }) =>
        setCast(
          cast.map(({ name, character, profile_path }) => {
            const castName = name;
            const imgURL = profile_path
              ? API_IMG_POSTER + profile_path
              : noImage;

            return {
              castName,
              character,
              imgURL,
            };
          })
        )
      )
      .catch(error => console.error(error));
  }, [movieId]);

  return (
    <Section>
      <ul>
        {cast.map(({ imgURL, castName, character }) => (
          <li key={castName}>
            <img src={imgURL} alt={castName} width="100" />
            <StyledText>{castName}</StyledText>
            <StyledText>{character}</StyledText>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Cast;
