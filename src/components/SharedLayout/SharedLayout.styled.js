import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Section = styled.main`
  margin-left: auto;
  margin-right: auto;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  margin-bottom: 1rem;
  box-shadow: 0.5rem 0.5rem 0.25rem 0 rgba(0, 0, 0, 0.5);
`;

export const StyledLink = styled(NavLink)`
  font-size: 1rem;
  font-weight: 600;
  margin-right: 1rem;
  text-decoration: none;
  color: black;
  &.active {
    color: red;
  }
`;
