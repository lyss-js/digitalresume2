import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import sr from '../utils/sr';
import { srConfig } from '../config';
import IconGithub from './icons/github';
import IconExternal from './icons/external';
import styled from 'styled-components';
import { theme, mixins, media, Section, Heading } from '../styles';
const { colors, fontSizes, fonts } = theme;

const FeaturedContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
`;
const FeaturedGrid = styled.div`
  position: relative;
`;
const ContentContainer = styled.div`
  position: relative;
  z-index: 2;
  grid-column: 1 / 7;
  grid-row: 1 / -1;
  ${media.thone`
    grid-column: 1 / -1;
    padding: 40px 40px 30px;
  `};
  ${media.phablet`padding: 30px 25px 20px;`};
`;

const ProjectName = styled.h5`
  font-size: 28px;
  font-weight: 600;
  margin: 0 0 20px;
  color: ${colors.white};
  ${media.tablet`font-size: 24px;`};
  a {
    ${media.tablet`display: block;`};
  }
`;
const ProjectDescription = styled.div`
  background-color: ${colors.darkestGrey};
  color: ${colors.white};
  padding: 25px;
  border-radius: ${theme.borderRadius};
  font-size: ${fontSizes.large};
  ${media.thone`
    background-color: transparent;
    padding: 20px 0;
  `};
  p {
    margin: 0;
  }
  a {
    ${mixins.inlineLink};
    color: ${colors.white};
  }
`;
const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 25px 0 10px;
  li {
    font-family: ${fonts.SFMono};
    font-size: ${fontSizes.smallish};
    color: ${colors.lightGrey};
    margin-right: ${theme.margin};
    margin-bottom: 7px;
    white-space: nowrap;
    &:last-of-type {
      margin-right: 0;
    }
    ${media.thone`
      color: ${colors.lightestSlate};
      margin-right: 10px;
    `};
  }
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 10px;
  margin-left: -10px;
  a {
    padding: 10px;
    svg {
      width: 22px;
      height: 22px;
    }
  }
`;
const ProjectImg = styled(Img)`
  width: 100%;
  max-width: 100%;
  vertical-align: middle;
  border-radius: ${theme.borderRadius};
  position: relative;
  -webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  -moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
       box-shadow:0 1px 10px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;  
  &::before
  {
    content:"";
      position:absolute;
      z-index:-1;
      -webkit-box-shadow:0 0 20px rgba(0,0,0,0.8);
      -moz-box-shadow:0 0 20px rgba(0,0,0,0.8);
      box-shadow:0 0 40px rgba(0,0,0,0.8);
      top:0;
      bottom:0;
      left:10px;
      right:10px;
      -moz-border-radius:100px / 10px;
      border-radius:100px / 10px;
  }
  &::after
  {
    right:10px;
      left:auto;
      -webkit-transform:skew(8deg) rotate(3deg);
         -moz-transform:skew(8deg) rotate(3deg);
          -ms-transform:skew(8deg) rotate(3deg);
           -o-transform:skew(8deg) rotate(3deg);
              transform:skew(8deg) rotate(3deg);
  }
  ${media.tablet`
    object-fit: cover;
    width: auto;
    height: 100%;
  `};
`;
const ImgContainer = styled.div`
  position: relative;
  z-index: 1;
  border-radius: ${theme.borderRadius};
  background-color: ${colors.green};
  border-radius: 2px;
  grid-column: 6 / -1;
  grid-row: 1 / -1;
  transition: ${theme.transition};
  ${media.tablet`height: 100%;`};
  ${media.thone`
    grid-column: 1 / -1;
  `};
  &:hover,
  &:focus {
    background: transparent;
    &:before,
    ${ProjectImg} {
      background: transparent;
      filter: none;
    }
  }
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
    transition: ${theme.transition};
    background-color: ${colors.navy};
    mix-blend-mode: lighten;
  }
`;
const Project = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  margin-bottom: 100px;
  ${media.thone`margin-bottom: 70px;`};
  &:last-of-type {
    margin-bottom: 0;
  }
  &:nth-of-type(odd) {
    ${ContentContainer} {
      grid-column: 7 / -1;
      text-align: right;
      ${media.thone`
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
      `};
      ${media.phablet`padding: 30px 25px 20px;`};
    }
    ${TechList} {
      justify-content: flex-end;
      li {
        margin-left: ${theme.margin};
        margin-right: 0;
      }
    }
    ${Links} {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;
    }
    ${ImgContainer} {
      grid-column: 1 / 8;
      ${media.tablet`height: 100%;`};
      ${media.thone`
        grid-column: 1 / -1;
        opacity: 0.25;
      `};
    }
  }
`;

class Projects extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);
    this.revealRefs = [];
  }

  componentDidMount() {
    sr.reveal(this.featured, srConfig());
    this.revealRefs.forEach(ref => sr.reveal(ref, srConfig()));
  }

  render() {
    const { data } = this.props;
    const featuredProjects = data.filter(({ node }) => node.frontmatter.show === 'true');

    return (
      <FeaturedContainer id="projects">
        <Heading ref={el => (this.featured = el)}>Projects</Heading>
        <FeaturedGrid>
          {featuredProjects &&
            featuredProjects.map(({ node }, i) => {
              const { frontmatter, html } = node;
              const { external, title, tech, github, cover } = frontmatter;

              return (
                <Project key={i} ref={el => (this.revealRefs[i] = el)}>
                  <ContentContainer>
                    <ProjectName>
                      {external ? (
                        <a
                          href={external}
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                          aria-label="External Link">
                          {title}
                        </a>
                      ) : (
                        title
                      )}
                    </ProjectName>
                    <ProjectDescription dangerouslySetInnerHTML={{ __html: html }} />
                    {tech && (
                      <TechList>
                        {tech.map((tech, i) => (
                          <li key={i}>{tech}</li>
                        ))}
                      </TechList>
                    )}
                    <Links>
                      {github && (
                        <a
                          href={github}
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                          aria-label="Github Link">
                          <IconGithub />
                        </a>
                      )}
                      {external && (
                        <a
                          href={external}
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                          aria-label="External Link">
                          <IconExternal />
                        </a>
                      )}
                    </Links>
                  </ContentContainer>

                  <ImgContainer>
                    <ProjectImg fluid={cover.childImageSharp.fluid} />
                  </ImgContainer>
                </Project>
              );
            })}
        </FeaturedGrid>
      </FeaturedContainer>
    );
  }
}

export default Projects;
