import React, { Component } from "react";
import * as api from "../utils/api";

class AddComment extends Component {
  state = {
    username: this.props.username,
    body: ""
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value }, () => {});
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.body.replace(/\s/g, "").length !== 0) {
      api.postNewComment(this.props.article_id, { ...this.state }).then(() => {
        this.setState({ username: this.props.username, body: "" });
        this.props.getComments();
      });
    }
  };

  render() {
    const { body } = this.state;
    return (
      <div>
        <form>
          <label className="CommentLabel">
            <input
              className="AddCommentBox"
              type="text"
              name="body"
              onChange={this.handleChange}
              value={body}
              required
              size="40"
            ></input>
          </label>
          <button className="AddCommentButton" onClick={this.handleSubmit}>
            Post Comment
          </button>
        </form>
      </div>
    );
  }
}

export default AddComment;
