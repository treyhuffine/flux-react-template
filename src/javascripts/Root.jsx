import $ from './vendor/jquery.min'
import React from 'react';

import { Router, Route, Link} from 'react-router';
import { history } from 'react-router/lib/HashHistory';

import App from './App.jsx'

export default class Root extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Route name="landing" path="/" component={App}>

        </Route>
      </Router>
    );
  }
}
