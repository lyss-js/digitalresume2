import React from 'react';
import  {graphql}  from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import Hero from '../components/hero';
import About from '../components/about';


import styled from 'styled-components';
import { mixins, Main } from '../styles';

const MainContainer = styled(Main)`
  ${mixins.sidePadding};
  counter-reset: section;
`;

const IndexPage = ({ data, location }) => (
  <Layout location={location}>
    <MainContainer id="content">
      <Hero data={data.hero.edges} />
      <About data={data.about.edges} />

    </MainContainer>
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object,
};

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    hero: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/hero/" } }) {
      edges {
        node {
          frontmatter {
            title
            name
            subtitle
          }
          html
        }
      }
    }
    about: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/about/" } }) {
      edges {
        node {
          frontmatter {
            title
            avatar {
              childImageSharp {
                fluid(maxWidth: 700, quality: 90, traceSVG: { color: "#64ffda" }) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            skills
          }
          html
        }
      }
    }
  }
`;
