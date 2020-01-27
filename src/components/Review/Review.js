import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import '../App/App.css';
import { connect } from 'react-redux';
import axios from 'axios';

class Review extends Component {

  handleSubmit = () => {
    console.log(`Adding result`, this.props.reduxStore);
    
    axios.post(`/feedback`, this.props.reduxStore)
      .then((response) => {
        console.log('response', response);
      })
      .catch(error => {
        console.log(error);
        alert(`Sorry, couldn't submit feedback at this time. Try again later`);
      })
    this.props.history.push('/submission')
  }

  render() {
    return (
      <div>
        <h1>Review Your Feedback</h1>
        <ul >
          <li>Feeling: {this.props.reduxStore.feelingReducer}</li>
          <li>Understanding: {this.props.reduxStore.understandingReducer}</li>
          <li>Support: {this.props.reduxStore.supportReducer}</li>
          <li>Comments: {this.props.reduxStore.commentsReducer}</li>
        </ul>
        <button onClick={this.handleSubmit}>SUBMIT</button>
      </div>
    );
  }
}

const mapStateToProps = (reduxStore) => ({
  reduxStore
})

export default withRouter(connect(mapStateToProps)(Review));