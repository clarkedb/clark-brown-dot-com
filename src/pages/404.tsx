import React, { Component } from 'react';
import * as styles from './Index.module.scss';

export default class ErrorPage extends Component {

  public render() {

    return (
      <div className={styles.Container}>
        <h1>Oops!</h1>
        <p>Looks like that page doesn't exist...</p>
      </div>
    );
  }
}
