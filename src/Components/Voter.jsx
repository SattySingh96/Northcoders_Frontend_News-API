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
    api.patchVotes(this.props.type, this.props.id, name).catch(err => {
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
      <div id="voter">
        <button
          className="upVoteButton"
          onClick={this.handleClick}
          name="1"
          disabled={currentVote > 0}
        >
          ▲
        </button>
        <h2 className="voteValue">
          {this.props.votes + this.state.currentVote}
        </h2>
        <button
          className="downVoteButton"
          onClick={this.handleClick}
          name="-1"
          disabled={currentVote < 0}
        >
          ▼
        </button>
      </div>
    );
  }
}

export default Voter;
