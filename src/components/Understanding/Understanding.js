import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'

import '../App/App.css';

class Understanding extends Component {
  render() {
    return (
      <div>
        <h1>How well are you understanding the content?</h1>
        <h4>Understanding?</h4>
        <select >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button onClick = {()=>{this.props.history.push('/support')}}>NEXT</button>
      </div>
    );
  }
}

export default withRouter(Understanding);