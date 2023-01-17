import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchReviewsByID } from 'components/services/common-api.service';
import { Section } from 'components/SharedLayout/SharedLayout.styled.js';
import { StyledText } from 'pages/MovieDetails.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    fetchReviewsByID(movieId)
      .then(({ results }) =>
        setReviews(
          results.map(({ author, content }) => ({
            author,
            content,
          }))
        )
      )
      .catch(console.log('Error exception'));
  }, [movieId]);

  return (
    <Section>
      <ul>
        {reviews.length
          ? reviews.map(({ author, content }) => (
              <li key={content}>
                <StyledText>Author: {author}</StyledText>
                <StyledText>{content}</StyledText>
              </li>
            ))
          : "We don't have any reviews for this movie."}
      </ul>
    </Section>
  );
};

export default Reviews;
