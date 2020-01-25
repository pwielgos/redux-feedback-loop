import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'

import '../App/App.css';

class Comments extends Component {
  render() {
    return (
      <div>
        <h1>Any comments you want to leave?</h1>
        <h4>Comments?</h4>
        <input type="text"/>
        <button onClick = {()=>{this.props.history.push('/review')}}>NEXT</button>
      </div>
    );
  }
}

export default withRouter(Comments);