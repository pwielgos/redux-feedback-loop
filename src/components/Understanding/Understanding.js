import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import '../App/App.css';
import { connect } from 'react-redux';

class Understanding extends Component {
  state = {
    selectedOption: ''
  };

  handleChange = (event) => {
    this.setState({
      selectedOption: event.target.value,
    });
    console.log('selected understanding option is', this.state.selectedOption);
  }

  submitForm = () => {
    let understandingSelection = this.state.selectedOption;
    this.props.dispatch({
      type: 'SET_UNDERSTANDING',
      payload: understandingSelection
    })
    this.props.history.push('/support')
  }

  render() {
    return (
      <div>
        <h1>How well are you understanding the content?</h1>
        <h4>Understanding?</h4>
        <input type="number" onChange={this.handleChange} />
        <button onClick={this.submitForm}>NEXT</button>
      </div>
    );
  }
}

const mapStateToProps = (reduxStore) => ({
  reduxStore
})

export default withRouter(connect(mapStateToProps)(Understanding));