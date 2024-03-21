import { LinkStyled, Nav } from './Navigation.styled';

const Navigation = ({ closeModal }) => {
  return (
    <Nav>
      <LinkStyled to="/" onClick={closeModal}>
        Home
      </LinkStyled>

      <LinkStyled to="catalog" onClick={closeModal}>
        Catalog
      </LinkStyled>

      <LinkStyled to="favorite" onClick={closeModal}>
        Favorive
      </LinkStyled>
    </Nav>
  );
};
export default Navigation;
