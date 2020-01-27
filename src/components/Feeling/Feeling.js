import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import '../App/App.css';
import { connect } from 'react-redux';

class Feeling extends Component {
  state = {
    selectedOption: ''
  };

  handleChange = (event) => {
    this.setState({
      selectedOption: event.target.value,
    });
    console.log('selected feeling option is', this.state.selectedOption);
  }

  submitForm = () => {
    let feelingSelection = this.state.selectedOption;
    this.props.dispatch({
      type: 'SET_FEELING',
      payload: feelingSelection
    })
    this.props.history.push('/understanding')
  }

  render() {
    return (
      <div>
        <h1>How are you feeling today?</h1>
        <h4>Feeling?</h4>
        <input type="number" onChange={this.handleChange}/>
        <button onClick={this.submitForm}>NEXT</button>
      </div>
    );
  }
}

const mapStateToProps = (reduxStore) => ({
  reduxStore
})

export default withRouter(connect(mapStateToProps)(Feeling));