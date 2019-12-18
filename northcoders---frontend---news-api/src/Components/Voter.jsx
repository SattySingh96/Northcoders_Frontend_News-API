import React, { Component } from "react";
import * as api from "../utils/api";
import ErrDisplayer from "./ErrDisplayer";

class Voter extends Component {
  state = {
    currentVote: 0,
    err: ""
  };

  handleClick = event => {
    const { name } = event.target;
    console.log(this.props.id, this.props.type)
    this.setState(currentState => {
      return {
        currentVote: currentState.currentVote + +name
      };
    });
    api.patchVotes(name, this.props.id, name).catch(err => {
      this.setState(currentState => {
        return {
          err: "Cannot vote anymore",
          currentVote: currentState.currentVote - +name
        };
      });
    });
  };

  render() {
    const { currentVote, err } = this.state;
    if (err) return <ErrDisplayer err={err} />;
    return (
      <div id='voter'> 
        <button 
        onClick={this.handleClick} 
        name="1" 
        disabled={currentVote > 0}
        >
          +1
        </button>
        <h5>{this.props.votes + this.state.currentVote}</h5>
        <button 
        onClick={this.handleClick} 
        name="-1" 
        disabled={currentVote < 0}>
          -1
        </button>
      </div>
    );
  }
}

export default Voter;
