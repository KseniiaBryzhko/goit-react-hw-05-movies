import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviews } from 'services/api';
import {
  ReviewList,
  ReviewItem,
  ReviewTitle,
  ReviewText,
} from './Reviews.styled';
import { Loader } from 'components/Loader/Loader';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const getReviews = async () => {
      setIsLoading(true);
      try {
        const data = await getMovieReviews(movieId);
        setReviews([...data]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getReviews();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {reviews.length > 0 ? (
        <ReviewList>
          {reviews.map(({ author, content, id }) => {
            return (
              <ReviewItem key={id}>
                <ReviewTitle>Author: {author}</ReviewTitle>
                <ReviewText>"{content}"</ReviewText>
              </ReviewItem>
            );
          })}
        </ReviewList>
      ) : (
        <p>Sorry, there is no review</p>
      )}
    </>
  );
}
