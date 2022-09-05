import Image from 'next/image';
import React from 'react';
import { Container, Layout } from '../components';
import { StyledAbout } from '../components/styles/about.styles';

/**
 * About page `/about`
 */
const About = () => {
  return (
    <Layout
      pathname="/about"
      pageTitle="About"
      pageDescription="About page of Peacock starter by Victor Ofoegbu, Product Designer and Frontend Software Engineer in Nigeria"
    >
      <StyledAbout>
        <Container width="narrow">
          <div className="postContent">
            <div className="avatarImage">
              <Image
                src="/images/me2.jpg"
                width={200}
                height={200}
                alt="Tiago Serra"
              />
            </div>
            <p>
              I'm{' '}
              <a
                href="https://twitter.com/TiagoS_HR"
                target="_blank"
                rel="noopener noreferrer"
              >
                @Tiago
              </a>
              , an aspiring Full-Stack Engineer learning to build fast and
              delightful experiences on the web.
            </p>
            <p>
              I'm currently enrolled on the "Web Development Bootcamp" from
              Upleveled. An immersive 12-week Bootcamp where I'm learning
              in-demand web technologies like HTML, CSS, JavaScript, React,
              Node.js, GraphQL and Databases.
            </p>

            <p>
              I work heavily with ReactJs, Redux, Styled Components and If
              you're excited about any of the following, please shoot at me on{' '}
              <a
                href="https://twitter.com/TiagoS_HR"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>{' '}
              and let's be friends 😊.
            </p>
          </div>
        </Container>
      </StyledAbout>
    </Layout>
  );
};

export default About;
