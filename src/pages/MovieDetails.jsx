import { useState, useEffect } from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';
import { fetchAPIByID } from 'components/services/common-api.service';
import { API_IMG_POSTER } from 'components/constants/api.constants.js';
import {
  StyledMovieCard,
  StyledPoster,
  StyledDetails,
  StyledMovieTitle,
  StyledMovieSubtitle,
  StyledText,
  StyledAdditional,
} from './MovieDetails.styled.js';

import noImage from 'components/constants/no_image.jpg';

export const MovieDetails = () => {
  const [details, setDetails] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    fetchAPIByID(movieId)
      .then(
        ({
          title,
          release_date,
          popularity,
          overview,
          genres,
          tagline,
          poster_path,
        }) => {
          const year = release_date.substring(0, 4);
          const userScore = Math.round(popularity) + '%';
          const genreList = genres.map(genre => genre['name']).join(' ');
          const imgURL = poster_path ? API_IMG_POSTER + poster_path : noImage;
          console.log('Path: ', imgURL);
          return setDetails({
            title,
            year,
            userScore,
            overview,
            genreList,
            tagline,
            imgURL,
          });
        }
      )
      .catch(error => console.log(error.message));
  }, [movieId]);

  const { title, year, userScore, overview, genreList, tagline, imgURL } =
    details;

  return (
    <>
      <button type="button">&#8592; Go back</button>
      <StyledMovieCard>
        <StyledPoster>
          <img src={imgURL} alt={tagline} width="200" />
        </StyledPoster>
        <StyledDetails>
          <StyledMovieTitle>
            {title} &#40; {year} &#41;
          </StyledMovieTitle>
          <StyledText>User score: {userScore}</StyledText>
          <StyledMovieSubtitle>Overview</StyledMovieSubtitle>
          <StyledText>{overview}</StyledText>
          <StyledMovieSubtitle>Genres</StyledMovieSubtitle>
          <StyledText>{genreList}</StyledText>
        </StyledDetails>
      </StyledMovieCard>

      <StyledAdditional>
        <StyledText>Additional information</StyledText>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </StyledAdditional>
      <Outlet id={movieId} />
    </>
  );
};
