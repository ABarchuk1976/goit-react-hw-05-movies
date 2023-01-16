import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  fetchAPIByID,
  fetchCastByID,
  fetchReviewsByID,
} from 'components/services/common-api.service';
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

export const MovieDetails = () => {
  const [details, setDetails] = useState({});
  const { movieId } = useParams();

  console.log(movieId);

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
        }) =>
          setDetails({
            title,
            year: release_date.substring(0, 4),
            userScore: Math.round(popularity) + '%',
            overview,
            genreList: genres.map(genre => genre['name']).join(' '),
            tagline,
            imgURL: API_IMG_POSTER + poster_path,
          })
      )
      .catch(console.log('Error exception'));
  }, [movieId]);

  const { title, year, userScore, overview, genreList, tagline, imgURL } =
    details;

  console.log(year);
  // const year =

  return (
    <>
      <button type="button">&#8592; Go back</button>
      <StyledMovieCard>
        <StyledPoster>
          <img src={imgURL} alt={tagline} />
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
    </>
  );
};
