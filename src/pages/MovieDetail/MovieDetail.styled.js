import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Main = styled.main`
  padding: 36px 16px;
  max-width: 1240px;
  margin: 0 auto;
`;

export const Button = styled(Link)`
  display: inline-block;
  padding: 6px 14px;
  border: none;
  border-radius: 5px;
  background-color: #97c74d;
  color: #000000;
  cursor: pointer;
  outline: none;
  text-transform: uppercase;
  margin-bottom: 36px;
  font-weight: 500;

  :hover,
  :focus {
    background-color: #242a2a;
    color: #ffffff;
  }
`;

export const MovieItem = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  margin-bottom: 36px;
  @media (min-width: 480px) {
    grid-template-columns: 200px 1fr;
  }
  @media (min-width: 768px) {
    grid-template-columns: 300px 1fr;
  }
`;

export const MoviePoster = styled.img`
  border-radius: 5px;
`;

export const MovieTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
`;

export const MovieRating = styled.p`
  display: inline-block;
  margin-bottom: 20px;
  background-color: #97c74d;
  color: #000000;
  font-weight: 500;
  padding: 6px 14px;
  border-radius: 5px;
`;

export const MovieOverview = styled.h2`
  margin-bottom: 14px;
  font-size: 24px;
`;

export const MovieOverviewText = styled.p`
  margin-bottom: 20px;
`;

export const Genres = styled.h3`
  margin-bottom: 16px;
  font-size: 24px;
`;

export const AddInfo = styled.h3`
  margin-bottom: 16px;
  font-size: 24px;
`;

export const LinkItem = styled(Link)`
  display: inline-block;
  padding: 6px 14px;
  border-radius: 5px;
  background-color: #97c74d;
  color: #000000;
  cursor: pointer;
  text-transform: uppercase;
  margin-bottom: 16px;
  font-weight: 500;

  :hover,
  :focus {
    background-color: #242a2a;
    color: #ffffff;
  }
`;

export const Error = styled.p`
  padding: 32px 16px;
  font-size: 32px;
  text-align: center;
  color: #000000;
`;
