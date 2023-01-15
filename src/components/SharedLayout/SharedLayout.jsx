import { Outlet } from 'react-router-dom';

import { StyledLink, Section, Header } from './SharedLayout.styled.js';

const SharedLayout = () => {
  return (
    <Section>
      <Header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Header>
      <Outlet />
    </Section>
  );
};

export default SharedLayout;
