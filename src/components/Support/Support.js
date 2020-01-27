import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../App/App.css';
import { connect } from 'react-redux';

class Support extends Component {
  state = {
    selectedOption: ''
  };

  handleChange = (event) => {
    this.setState({
      selectedOption: event.target.value,
    });
  }

  submitForm = () => {
    let supportSelection = this.state.selectedOption;
    this.props.dispatch({
      type: 'SET_SUPPORT',
      payload: supportSelection
    })
    this.props.history.push('/comments')
  }

  render() {
    return (
      <div>
        <h1>How well are you being supported?</h1>
        <h4>Support?</h4>
        <input type="number" onChange={this.handleChange} />
        <button onClick={this.submitForm}>NEXT</button>
      </div>
    );
  }
}

const mapStateToProps = (reduxStore) => ({
  reduxStore
})

export default withRouter(connect(mapStateToProps)(Support));