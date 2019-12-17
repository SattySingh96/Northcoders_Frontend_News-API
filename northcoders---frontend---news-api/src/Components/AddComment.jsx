import React, { Component } from "react";

class AddComment extends Component {
  state = {
    author: "",
    body: ""
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = () => {};

  render() {
    return (
      <form>
        <label>
          <input></input>
          <button>Post</button>
        </label>
      </form>
    );
  }
}

export default AddComment;
