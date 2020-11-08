import ButtonAppBar from '../components/navigation/app-bar/appBar';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";
import { graphql } from 'gatsby';
import React, { Component, Fragment } from 'react';
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
      <Fragment>
        <Helmet>
          <title>Clark Brown</title>
        </Helmet>
        <div>
          {ButtonAppBar()}
        </div>
        <div className={styles.Body}>
          <div className={styles.Container}>
            <h1>My name is Clark Brown.</h1>
            <p>This is my website.</p>
          </div>
        </div>
      </Fragment>
    );
  }
}
