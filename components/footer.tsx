import React from 'react';
import { Container } from './container';
import {
  GitHubIcon,
  LinkedInIcon,
  StyledFooterSection,
  TwitterIcon,
} from './styles/footer.styles';

const Footer = () => (
  <StyledFooterSection>
    <Container className="footer-container">
      <ul className="footerSocialLinks">
        <li className="footerSocialLink">
          <a
            className="footerLink"
            href="https://github.com/N2Late"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="github"
          >
            <GitHubIcon />
          </a>
        </li>

        <li className="footerSocialLink">
          <a
            className="footerLink"
            href="https://www.linkedin.com/in/tiago-serra-hr/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="linkedin"
          >
            <LinkedInIcon />
          </a>
        </li>

        <li className="footerSocialLink">
          <a
            className="footerLink"
            href="https://twitter.com/TiagoS_HR"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="twitter"
          >
            <TwitterIcon />
          </a>
        </li>
      </ul>
    </Container>

    <Container>
      <p className="about-site">
        Built by{' '}
        <a
          href="https://twitter.com/TiagoS_HR"
          target="_blank"
          rel="noreferrer noopener"
        >
          @TiagoS_HR
        </a>
        . With NextJS, TypeScript Emotion and Vercel.{' '}
        <a
          href="https://github.com/vickOnRails/next-starter-peacock"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source
        </a>
      </p>
    </Container>
  </StyledFooterSection>
);

export default Footer;
