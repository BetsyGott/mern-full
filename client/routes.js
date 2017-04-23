import React from 'react';
import {Router, Route} from 'react-router';
import {Home} from './Home';
import {About} from './About';
import {ToDoDemo} from './ToDoDemo';

<<<<<<< HEAD
export default (
  <Router>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/todo" component={ToDoDemo} />
=======
export default  (
  <Router>
    <Route path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/todo" component={ToDoDemo}/>
>>>>>>> upstream/master
  </Router>
);