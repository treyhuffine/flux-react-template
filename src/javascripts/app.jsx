import $ from './vendor/jquery.min'
import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, Link} from 'react-router';
import { history } from 'react-router/lib/HashHistory';

import Example from './components/Example';


class App extends React.Component {
  render() {
    return (
      <div className="content-wrapper">
        <Example />
      </div>
    );
  }
}

$(document).ready( () => {
  ReactDOM.render(<App />, document.getElementById("root"));
})
