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
    this.setState(currentState => {
      return {
        currentVote: currentState.currentVote + +name
      };
    });
    api.patchVotes(name, this.props.id, this.props.votes).catch(err => {
      this.setState(currentState => {
        return {
          err: "Cannot vote",
          currentVote: currentState.currentVote - +name
        };
      });
    });
  };

  render() {
    const { currentVote, err } = this.state;
    if (err) return <ErrDisplayer err={err} />;
    return (
      <div>
        <button onClick={this.handleClick} name="1" disabled={currentVote > 0}>
          +1
        </button>
        <h5>{this.props.votes + this.state.currentVote}</h5>
        <button onClick={this.handleClick} name="-1" disabled={currentVote < 0}>
          -1
        </button>
      </div>
    );
  }
}

export default Voter;
