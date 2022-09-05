import React from 'react';
import siteConfig from '../../config/index.json';
import { Container } from '../container';
import { StyledHomeHeading } from '../styles/header.styles';

const HomeHeader = () => (
  <StyledHomeHeading>
    <Container>
      <div className="header-container">
        <h1
          data-cy="homePageTitle"
          dangerouslySetInnerHTML={{ __html: siteConfig.author.title }}
        />
        <p
          className="description"
          dangerouslySetInnerHTML={{ __html: siteConfig.author.description }}
        />
      </div>
    </Container>
  </StyledHomeHeading>
);

export default HomeHeader;
