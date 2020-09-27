import { Button } from '@material-ui/core';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import * as styles from './Index.module.scss';

export default class ErrorPage extends Component {

  public render() {

    return (
      <div className={styles.Container}>
        <Helmet>
          <title>Page Not Found | Clark Brown</title>
        </Helmet>
        <h1>Oops!</h1>
        <p>Looks like that page doesn't exist...</p>
        <Button
          variant="contained"
          color="primary"
          href="/"
        >Take Me Home</Button>
      </div>
    );
  }
}
