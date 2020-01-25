import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'

import '../App/App.css';

class Submission extends Component {
  render() {
    return (
      <div>
        <h1>Thank You!</h1>
        <button onClick = {()=>{this.props.history.push('/')}}>Leave New Feedback</button>
      </div>
    );
  }
}

export default withRouter(Submission);