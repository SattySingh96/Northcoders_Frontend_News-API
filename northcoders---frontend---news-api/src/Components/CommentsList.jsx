import React, { Component } from "react";
import * as api from "../utils/api";
import Loader from "./Loader";
import ErrDisplayer from "./ErrDisplayer";

class CommentsList extends Component {
  state = {
    comments: [],
    isLoading: true,
    err: ""
  };

  getComments = () => {
    api
      .fetchArticleCommentsByArticleID(this.props.article_id)
      .then(comments => {
        this.setState({ comments, isLoading: false });
      })
      .catch(({ response: { data } }) => {
        this.setState({ err: data.err, isLoading: false });
      });
  };

  componentDidMount() {
    this.getComments();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.article_id !== this.props.article_id) {
      this.getComments();
    }
  }

  render() {
    const { err } = this.state;
    if (this.state.isLoading) return <Loader />;
    if (err) return <ErrDisplayer err />;
    return (
      <div>
        {this.state.comments.map(comment => {
          return <CommentCard key={comment.comment_id} {...comment} />;
        })}
      </div>
    );
  }
}

export default CommentsList;
