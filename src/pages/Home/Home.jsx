import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import { MovieList } from 'components/MovieList/MovieList';
import { Main } from 'pages/MovieDetail/MovieDetail.styled';
import { ListName } from 'pages/Home/Home.styled';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      setIsLoading(true);
      try {
        const movies = await getTrendingMovies();
        setMovies(movies.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, []);

  return (
    <Main>
      <ListName>Trending today</ListName>
      {isLoading ? <Loader /> : <MovieList movies={movies} link={'movies/'} />}
    </Main>
  );
}
