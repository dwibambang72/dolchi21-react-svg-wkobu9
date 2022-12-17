import React, { Component } from 'react';
import { render } from 'react-dom';

import Finance from './components/Finance';
import Growth from './components/Growth';
import Login from './components/Login';

import './style.css';

var SVGs = [
  Finance,
  Login,
]

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        {SVGs.map(C =>
          <C size={400} />
        )}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
