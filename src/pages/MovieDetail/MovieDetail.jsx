import { useState, useEffect } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { getMovieDetails } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import {
  Main,
  Button,
  MovieItem,
  MoviePoster,
  MovieTitle,
  MovieRating,
  MovieOverview,
  MovieOverviewText,
  Genres,
  AddInfo,
  LinkItem,
  Error,
} from './MovieDetail.styled';

export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState({});
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const getMovies = async () => {
      setIsLoading(true);
      try {
        const { poster_path, name, title, overview, genres, vote_average } =
          await getMovieDetails(movieId);
        setMovieDetails({
          poster_path,
          name: name || undefined,
          title: title || undefined,
          vote_average: vote_average.toFixed(2),
          overview,
          genres: genres.map(({ name }) => <li>{name}</li>),
        });
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, [movieId]);

  const hasError = error.length > 0;
  const { poster_path, name, title, vote_average, overview, genres } =
    movieDetails;

  return (
    <>
      {hasError ? (
        <Error>
          <p>Sorry, movie was not found, try again later</p>
        </Error>
      ) : (
        <Main>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <Button to={location.state?.from ?? '/'}>Go back</Button>
              <MovieItem>
                <MoviePoster
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w500${poster_path}`
                      : 'https://placehold.co/200x300/orange/white?text=There+is+no+poster&font=roboto.png'
                  }
                  alt={name || title}
                />
                <div>
                  <MovieTitle>{name || title || 'No name'}</MovieTitle>
                  <MovieRating>
                    Rating: {vote_average || 'No votes'}
                  </MovieRating>
                  <MovieOverview>Overview:</MovieOverview>
                  <MovieOverviewText>
                    {overview || 'No overview'}
                  </MovieOverviewText>
                  <Genres>Genres:</Genres>
                  <p>{genres || 'No genres'}</p>
                </div>
              </MovieItem>
              <div>
                <AddInfo>Additional information</AddInfo>
                <ul>
                  <li>
                    <LinkItem
                      to="cast"
                      state={{ from: location.state?.from ?? '/' }}
                    >
                      Cast
                    </LinkItem>
                  </li>
                  <li>
                    <LinkItem
                      to="reviews"
                      state={{ from: location.state?.from ?? '/' }}
                    >
                      Reviews
                    </LinkItem>
                  </li>
                </ul>
              </div>
              <Outlet />
            </>
          )}
        </Main>
      )}
    </>
  );
}
