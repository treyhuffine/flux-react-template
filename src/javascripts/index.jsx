import $ from './vendor/jquery.min'
import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, Link} from 'react-router';
import { history } from 'react-router/lib/HashHistory';

import App from './components/App';

$(document).ready( () => {
  ReactDOM.render(<App />, document.getElementById("root"));
})
