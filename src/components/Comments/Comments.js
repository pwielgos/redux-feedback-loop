import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import '../App/App.css';
import { connect } from 'react-redux';

class Comments extends Component {
  state = {
    commentsOption: ''
  };

  handleChange = (event) => {
    this.setState({
      commentsOption: event.target.value,
    });
    console.log('comments option is', this.state.commentsOption);
  }

  submitForm = () => {
    let comment = this.state.commentsOption;
    this.props.dispatch({
      type: 'SET_COMMENTS',
      payload: comment
    })
    this.props.history.push('/review')
  }


  render() {
    return (
      <div>
        <h1>Any comments you want to leave?</h1>
        <h4>Comments?</h4>
        <input type="text" onChange={this.handleChange}/>
        <button onClick={this.submitForm}>NEXT</button>
      </div>
    );
  }
}

const mapStateToProps = (reduxStore) => ({
  reduxStore
})

export default withRouter(connect(mapStateToProps)(Comments));