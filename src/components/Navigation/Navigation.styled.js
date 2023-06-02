import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  max-width: 1240px;
  margin: 0 auto;
  font-size: 32px;
  text-transform: uppercase;
  border-bottom: 1px solid #000000;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  font-size: 32px;
  padding: 16px 0 0 0;
  text-transform: uppercase;
`;

export const NavItem = styled(NavLink)`
  color: #000000;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 6px 12px;

  &.active {
    border-top: 1px solid #000000;
    border-left: 1px solid #000000;
    border-right: 1px solid #000000;
    color: #ffffff;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #ffffff;
  }
`;
