import { graphql } from 'gatsby';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import * as styles from './Index.module.scss';

export interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        index: {
          default: string;
        }
      },
    },
  };
}

export const indexPageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        index {
          default
        }
      }
    }
  }
`;

export default class IndexPage extends Component<IndexPageProps, {}> {

  render() {
    return (
      <div className={styles.Container}>
        <Helmet>
          <title>Clark Brown</title>
        </Helmet>
        <h1>My name is Clark Brown.</h1>
        <p>This is my website.</p>
      </div>
    );
  }
}
