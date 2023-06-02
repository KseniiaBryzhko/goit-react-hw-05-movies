import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  List,
  MovieItem,
  NavItem,
  MovieName,
  MovieImage,
} from './MovieList.styled';

export const MovieList = ({ movies, link }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(({ poster_path, name, title, id }) => {
        return (
          <MovieItem key={id}>
            <NavItem to={`${link}${id}`} state={{ from: location }}>
              <MovieImage
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                    : 'https://placehold.co/200x300/476531/ffffff?text=There+is+no+poster&font=roboto.png'
                }
                alt={title}
                width={300}
              />

              <MovieName>{name || title}</MovieName>
            </NavItem>
          </MovieItem>
        );
      })}
    </List>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      title: PropTypes.string,
    }).isRequired
  ).isRequired,
  link: PropTypes.string,
};
