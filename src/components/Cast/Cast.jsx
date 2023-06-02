import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieCredits } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import { CastList, CastItem, CastImage, CastText } from './Cast.styled';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const getCast = async () => {
      setIsLoading(true);
      try {
        const data = await getMovieCredits(movieId);
        setCast([...data]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getCast();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {cast.length > 0 ? (
        <CastList>
          {cast.map(({ profile_path, character, original_name, id }) => {
            return (
              <CastItem key={id}>
                <CastImage
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500${profile_path}`
                      : 'https://placehold.co/100x150/476531/ffffff?text=There+is+no+photo&font=roboto.png'
                  }
                  alt={original_name}
                />
                <CastText>{original_name}</CastText>
                <CastText>"{character}"</CastText>
              </CastItem>
            );
          })}
        </CastList>
      ) : (
        <p>Sorry, we have no information about cast of this movie</p>
      )}
    </>
  );
}
