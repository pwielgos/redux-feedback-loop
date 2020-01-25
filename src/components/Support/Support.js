import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'

import '../App/App.css';

class Support extends Component {
  render() {
    return (
      <div>
        <h1>How well are you being supported?</h1>
        <h4>Support?</h4>
        <select >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button onClick = {()=>{this.props.history.push('/comments')}}>NEXT</button>
      </div>
    );
  }
}

export default withRouter(Support);