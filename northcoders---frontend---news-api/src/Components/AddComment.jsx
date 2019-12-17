import React, { Component } from "react";
import * as api from "../utils/api";

class AddComment extends Component {
  state = {
    username: "",
    body: ""
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value }, () => {
      console.log(this.state);
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("in handlesubmit");
    api
      .postNewComment(this.props.article_id, { ...this.state })
      .then(comment => {
        console.log("in then of postnewComment");
        this.setState({ username: "", body: "" });
      });
  };

  render() {
    const { username, body } = this.state;
    return (
      <div>
        <form>
          <label>
            User:
            <input
              type="text"
              name="username"
              onChange={this.handleChange}
              value={username}
            ></input>
          </label>
          <label>
            Comment:
            <input
              type="text"
              name="body"
              onChange={this.handleChange}
              value={body}
            ></input>
          </label>
          <button onClick={this.handleSubmit}>Post Comment</button>
        </form>
      </div>
    );
  }
}

export default AddComment;
