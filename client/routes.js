import React from 'react';
import {browserHistory, Router, Route} from 'react-router';
import {Home} from './Home';
import {About} from './About';

const routes = (
  <Router>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />

  </Router>
);
