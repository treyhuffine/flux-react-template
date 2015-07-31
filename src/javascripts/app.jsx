import $ from './vendor/jquery.min'
import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        <h1>Hello World</h1>
        {this.props.children}
      </div>
    );
  }
}
