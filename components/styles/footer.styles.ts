import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Codepen, GitHub, Linkedin, Twitter } from 'react-feather';

export const StyledFooterSection = styled.footer`
  .footer-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .footerSocialLinks {
    display: flex;
    margin: auto;
    margin-bottom: 1em;
  }

  .footerSocialLink {
    display: block;
    margin-right: 0.5em;
  }

  .about-site {
    text-align: center;
    max-width: 400px;
    font-size: 0.9em;
    margin-right: auto;
    margin-left: auto;
  }
`;

const iconStyles = css`
  height: 1.2em;
  width: 1.2em;
`;

export const GitHubIcon = styled(GitHub)`
  ${iconStyles}
`;
export const TwitterIcon = styled(Twitter)`
  ${iconStyles}
`;
export const LinkedInIcon = styled(Linkedin)`
  ${iconStyles}
`;
