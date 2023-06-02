import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 42px;
`;

export const MovieItem = styled.li`
  max-width: 250px;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 4px 4px 5px #242a2a;
  :hover {
    box-shadow: 8px 8px 15px #242a2a;
  }
`;

export const NavItem = styled(NavLink)`
  color: #ffffff;
  border-radius: 5px;
  padding: 6px 6px;
  display: inline-block;
`;

export const MovieName = styled.h3`
  padding: 4px;
  margin-top: 8px;
  color: #000000;
  font-size: 18px;
  text-align: center;
`;

export const MovieImage = styled.img`
  border-radius: 5px;
  width: 250px;
`;
