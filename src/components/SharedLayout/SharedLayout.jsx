import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import {
  StyledLink,
  Section,
  StyledHeader,
  StyledMain,
} from './SharedLayout.styled.js';

const SharedLayout = () => {
  return (
    <>
      <Section>
        <StyledHeader>
          <nav>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/movies">Movies</StyledLink>
          </nav>
        </StyledHeader>
      </Section>
      <Section>
        <StyledMain>
          <Suspense>
            <Outlet />
          </Suspense>
        </StyledMain>
      </Section>
    </>
  );
};

export default SharedLayout;
