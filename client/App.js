import React, {Component} from 'react';
import {Router} from 'react-router';
import PropTypes from 'prop-types';

import styles from './App.css';

export class App extends Component {

    static propTypes = {
        history: PropTypes.object.isRequired,
        routes: PropTypes.object.isRequired
    };

    get content() {
        return ( <Router history={this.props.history} routes={this.props.routes} /> );
    }

  render() {
    return (
        <div className={styles.wrapper}>
            {this.content}
        </div>
    );
  }
}


