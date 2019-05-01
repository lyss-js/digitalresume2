import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import  Nav from './nav';
import { navLinks } from '../config';
import styled from 'styled-components';
import { GlobalStyle, theme } from '../styles';
const { colors, fontSizes, fonts } = theme;

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    location: PropTypes.object.isRequired,
  };

  state = {
    isLoading: true,
    githubInfo: {
      stars: null,
      forks: null,
    },
  };

  finishLoading = () => this.setState({ isLoading: false });

  componentDidMount() {
    fetch('https://api.github.com/repos/bchiang7/v4')
      .then(response => response.json())
      .then(json => {
        const { stargazers_count, forks_count } = json;
        this.setState({
          githubInfo: {
            stars: stargazers_count,
            forks: forks_count,
          },
        });
      });
  }

  render() {
    const { children, location } = this.props;
    const { isLoading } = this.state;

    return (
      <StaticQuery
        query={graphql`
          query LayoutQuery {
            site {
              siteMetadata {
                title
                description
              }
            }
          }
        `}
        render={({ site }) => (
          <div id="root">

            <GlobalStyle />


         
              <div className="container">
                {location && navLinks && <Nav location={location} navLinks={navLinks} />}
                {children}
              </div>
            
          </div>
        )}
      />
    );
  }
}

export default Layout;
