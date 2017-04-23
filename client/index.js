/**
 * Client entry point
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {App} from './App';
import {browserHistory, Router, Route} from 'react-router';
const mountApp = document.getElementById('root');
import Routes from './Routes';
import {Home} from './Home';
import {About} from './About';
import {Container} from './Container';
import {Todo} from './Todo';

console.log('GAPI_KEY', process.env.GAPI_KEY);

const routes = (
    <Router>
        <Route path="/" component={Home}/>
        <Route path="/todo" component={Todo}/>
        <Route path="/about" component={About}/>
    </Router>
);

const render = Component => {
    ReactDOM.render(
        <App history={browserHistory} routes={routes}/>,
        mountApp);
};

render(App);

