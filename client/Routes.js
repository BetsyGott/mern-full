import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import React, {Component} from 'react';
import {browserHistory, Router, Route} from 'react-router';
import {Home} from './Home';
import {About} from './About';

export class Routes extends React.Component {

    render() {
        return (
            <Router>
                <Route path="/" component={Home}/>
                <Route path="/about" component={About}/>
            </Router>
        )
    }
}
