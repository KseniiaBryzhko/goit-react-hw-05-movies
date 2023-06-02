import { Header, Nav, NavItem } from './Navigation.styled';

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

export const Navigation = () => {
  return (
    <Header>
      <Nav>
        {navItems.map(({ href, text }) => (
          <NavItem to={href} key={href}>
            {text}
          </NavItem>
        ))}
      </Nav>
    </Header>
  );
};
