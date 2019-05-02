import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import sr from '../utils/sr';
import { srConfig } from '../config';
import { FaReact, FaJsSquare, FaBootstrap } from 'react-icons/fa';
import styled from 'styled-components';

import { theme, mixins, media, Section, Heading } from '../styles';
import './skills.css';
const { colors, fontSizes, fonts } = theme;

const SkillsContainer = styled(Section)`
  position: relative;
`;
const FlexContainer = styled.div`
  ${mixins.flexBetween};
  align-items: flex-start;
  flex-direction: row;
  ${media.tablet`display: block;`};
`;
const NestedFlexContainer = styled.div`
  ${mixins.flexBetween};
  margin-top: 10%;
  align-items: flex-start;
  flex-direction: column;
  ${media.tablet`display: block;`};
`;
const FlexItem = styled.div`
color: ${colors.white};
font-size: ${fontSizes.xlarge};
font-weight: 700;
`;
const NestedFlexItem = styled.div`
color: ${colors.white};
font-size: ${fontSizes.medium};
font-weight: 400;
padding-top: 6px;
&:before {
    content: '+';
    left: 0;
    font-size: ${fontSizes.small};
  }
`;

const FlexDivider = styled.div`
content: '';
position: absolute;
right: -2px;
top: 25%;
width: 2px;
height: 50%;
background-color:rgb(0, 146,247);
`;

class Skills extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };

  componentDidMount() {
    sr.reveal(this.about, srConfig());
    
  }
  render() {
    const { data } = this.props;
    const { frontmatter, html } = data[0].node;
    const { title, programmingtitle } = frontmatter;

    return (
        <SkillsContainer id="skills" ref={el => (this.about = el)}>
        <Heading>{title}</Heading>
        <FlexContainer>
            <FlexItem>Languages
            <NestedFlexContainer>
                <NestedFlexItem> Javascript (ES6)</NestedFlexItem>
                <NestedFlexItem> Bootstrap</NestedFlexItem>
                <NestedFlexItem> ReactJS</NestedFlexItem>
                <NestedFlexItem> Node.js</NestedFlexItem>
                <NestedFlexItem> jQuery</NestedFlexItem>
                <NestedFlexItem> Redux</NestedFlexItem>
               <NestedFlexItem> HTML</NestedFlexItem>
               <NestedFlexItem> CSS3</NestedFlexItem>
            </NestedFlexContainer>
            </FlexItem>
            <hr size="200"></hr>
            <FlexItem>Tools &amp; Technologies
            <NestedFlexContainer>
            <NestedFlexItem> Command Line</NestedFlexItem>
            <NestedFlexItem> Git + Github</NestedFlexItem>
            <NestedFlexItem> CircleCI</NestedFlexItem>
            <NestedFlexItem> Docker</NestedFlexItem>
            <NestedFlexItem> Gatsby</NestedFlexItem>
            <NestedFlexItem> NPM</NestedFlexItem>
            </NestedFlexContainer>
            </FlexItem>
            <hr size="200"></hr>
            <FlexItem>Design
                <NestedFlexContainer>
                <NestedFlexItem> Microsoft Visual Studio</NestedFlexItem>
                <NestedFlexItem> Adobe Photoshop</NestedFlexItem>
                <NestedFlexItem> Adobe Illustrator</NestedFlexItem>
                <NestedFlexItem> Microsoft Office</NestedFlexItem>
                <NestedFlexItem> InVision</NestedFlexItem>
                <NestedFlexItem> Sketch</NestedFlexItem>
                </NestedFlexContainer>
            </FlexItem>
            <hr size="200"></hr>
            <FlexItem>Other
            <NestedFlexContainer>
                <NestedFlexItem> Response Web Design</NestedFlexItem>
                <NestedFlexItem> Graphic Design</NestedFlexItem>
                <NestedFlexItem> Agile Process</NestedFlexItem>
                </NestedFlexContainer>
            </FlexItem>
        </FlexContainer>
      </SkillsContainer>
      
    );
  }
}

export default Skills;
