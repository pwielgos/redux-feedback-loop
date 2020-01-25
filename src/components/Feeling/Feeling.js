import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import '../App/App.css';

class Feeling extends Component {
  render() {
    return (
      <div>
        <h1>How are you feeling today?</h1>
        <h4>Feeling?</h4>
        <select >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button onClick={() => { this.props.history.push('/understanding') }}>NEXT</button>
      </div>
    );
  }
}

export default withRouter(Feeling);