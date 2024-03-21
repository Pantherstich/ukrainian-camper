import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  @media screen and (max-width: 639px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const LinkStyled = styled(NavLink)`
  &.active {
    text-decoration: underline;
  }
`;
