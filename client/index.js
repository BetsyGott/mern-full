import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {browserHistory} from 'react-router';
const mountApp = document.getElementById('root');
export const GAPI_KEY = process.env.GAPI_KEY;
<<<<<<< HEAD
import routes from './routes';

=======
import routes from "./routes";
>>>>>>> upstream/master

const render = Component => {
  ReactDOM.render(
    <App history={browserHistory} routes={routes}/>,
    mountApp);
};

render(App);
