import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'

import '../App/App.css';

class Review extends Component {
  render() {
    return (
      <div>
        <h1>Review Your Feedback</h1>
        <button onClick = {()=>{this.props.history.push('/submission')}}>SUBMIT</button>
      </div>
    );
  }
}

export default withRouter(Review);